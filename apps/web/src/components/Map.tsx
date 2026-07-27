import { DISTRICTS, LOCATIONS, MAP } from '@ut/config'
import type { Category } from '@ut/types'
import maplibregl from 'maplibre-gl'
import { useCallback, useEffect, useRef } from 'react'

interface MapProps {
  activeDistrict?: string | null
  activeCategory?: Category | null
  onMarkerClick?: (slug: string) => void
  className?: string
  interactive?: boolean
}

const CATEGORY_EMOJI: Record<Category, string> = {
  waterfalls: '💧',
  forts: '🏰',
  temples: '🛕',
  lakes: '🌊',
  reservoirs: '🏗',
  archaeological: '🏛',
  'eco-tourism': '🌿',
  food: '🍛',
  viewpoints: '🏔',
  wildlife: '🐾',
  camping: '⛺',
  museums: '🏛',
  'hidden-gems': '💎',
}

export function Map({
  activeDistrict,
  activeCategory,
  onMarkerClick,
  className,
  interactive = true,
}: MapProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const mapRef = useRef<maplibregl.Map | null>(null)
  const markerRefs = useRef<maplibregl.Marker[]>([])

  const clearMarkers = useCallback(() => {
    for (const m of markerRefs.current) m.remove()
    markerRefs.current = []
  }, [])

  const getVisibleLocations = useCallback(() => {
    let locs = [...LOCATIONS]
    if (activeDistrict) {
      locs = locs.filter(l => l.district === activeDistrict)
    }
    if (activeCategory) {
      locs = locs.filter(l => l.category === activeCategory)
    }
    return locs
  }, [activeDistrict, activeCategory])

  useEffect(() => {
    if (!containerRef.current || mapRef.current) return

    const map = new maplibregl.Map({
      container: containerRef.current,
      style: MAP.style,
      center: MAP.defaultCenter,
      zoom: MAP.defaultZoom,
      minZoom: MAP.minZoom,
      maxZoom: MAP.maxZoom,
      pitch: MAP.pitch,
      bearing: MAP.bearing,
      attributionControl: false,
    })

    map.addControl(new maplibregl.AttributionControl({ compact: true }), 'bottom-right')
    if (interactive) {
      map.addControl(new maplibregl.NavigationControl(), 'bottom-right')
    }

    map.on('load', () => {
      mapRef.current = map
    })

    return () => {
      map.remove()
      mapRef.current = null
    }
  }, [interactive])

  // biome-ignore lint/correctness/useExhaustiveDependencies: markers controlled via getVisibleLocations
  useEffect(() => {
    if (!mapRef.current) return
    const locations = getVisibleLocations()
    clearMarkers()

    for (const loc of locations) {
      const el = document.createElement('div')
      const emoji = CATEGORY_EMOJI[loc.category as Category] ?? '📍'

      el.className = 'marker-pin'
      el.innerHTML = `<div class="marker-inner">${emoji}</div>`
      el.style.cssText = `
        width: 36px; height: 36px;
        display: flex; align-items: center; justify-content: center;
        cursor: pointer;
        transition: transform 0.2s ease;
        font-size: 18px;
      `
      el.addEventListener('mouseenter', () => {
        el.style.transform = 'scale(1.4)'
      })
      el.addEventListener('mouseleave', () => {
        el.style.transform = 'scale(1)'
      })
      el.addEventListener('click', () => onMarkerClick?.(loc.slug))

      const marker = new maplibregl.Marker({ element: el })
        .setLngLat([loc.coordinates.lng, loc.coordinates.lat])
        .setPopup(
          new maplibregl.Popup({ offset: 20, closeButton: false }).setHTML(
            `<div style="font-family:Inter,sans-serif;padding:4px 8px;font-size:13px;font-weight:500;white-space:nowrap">${loc.title}</div>`
          )
        )

      if (mapRef.current) {
        marker.addTo(mapRef.current)
      }

      markerRefs.current.push(marker)
    }
  }, [activeDistrict, activeCategory, getVisibleLocations, clearMarkers, onMarkerClick])

  useEffect(() => {
    if (!mapRef.current) return
    if (activeDistrict) {
      const district = DISTRICTS.find(d => d.slug === activeDistrict)
      if (district) {
        mapRef.current.flyTo({
          center: [district.center.lng, district.center.lat],
          zoom: district.zoom,
          duration: 1500,
          essential: true,
        })
      }
    } else {
      mapRef.current.flyTo({
        center: MAP.defaultCenter,
        zoom: MAP.defaultZoom,
        duration: 1200,
        essential: true,
      })
    }
  }, [activeDistrict])

  return <div ref={containerRef} className={className} style={{ width: '100%', height: '100%' }} />
}
