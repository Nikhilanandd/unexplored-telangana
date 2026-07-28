/// <reference types="@types/google.maps" />

import { DISTRICT_BOUNDARIES, LOCATIONS, MAP } from '@ut/config'
import type { Category } from '@ut/types'
import { setOptions, importLibrary } from '@googlemaps/js-api-loader'
import { useCallback, useEffect, useRef } from 'react'
import { useTheme } from '../theme'

const CATEGORY_EMOJI: Record<string, string> = {
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

interface GoogleMapViewProps {
  selectedDistrict?: string | null
  activeCategory?: Category | null
  onDistrictClick?: (slug: string) => void
  onMarkerClick?: (slug: string) => void
  className?: string
}

function getFilteredLocations(
  district: string | null | undefined,
  category: Category | null | undefined
) {
  let locs = [...LOCATIONS]
  if (district) locs = locs.filter(l => l.district === district)
  if (category) locs = locs.filter(l => l.category === category)
  return locs
}

const apiKey = (import.meta as any).env?.VITE_GOOGLE_MAPS_API_KEY ?? ''

let loaderReady = false
let loaderPromise: Promise<void> | null = null

function ensureGoogleMapsLoaded(): Promise<void> {
  if (loaderReady) return Promise.resolve()
  if (loaderPromise) return loaderPromise

  if (!apiKey) {
    return Promise.reject(new Error('VITE_GOOGLE_MAPS_API_KEY not set'))
  }

  loaderPromise = (async () => {
    setOptions({ key: apiKey, v: 'weekly' })
    await importLibrary('maps')
    await importLibrary('marker')
    loaderReady = true
  })()

  return loaderPromise
}

export function GoogleMapView({
  selectedDistrict,
  activeCategory,
  onDistrictClick,
  onMarkerClick,
  className,
}: GoogleMapViewProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const mapRef = useRef<google.maps.Map | null>(null)
  const polygonsRef = useRef<Map<string, google.maps.Polygon>>(new Map())
  const markersRef = useRef<google.maps.marker.AdvancedMarkerElement[]>([])
  const infoWindowRef = useRef<google.maps.InfoWindow | null>(null)
  const prevDistrictRef = useRef<string | null | undefined>(null)
  const { theme } = useTheme()

  const updateDistrictStyles = useCallback(() => {
    polygonsRef.current.forEach((poly, slug) => {
      poly.setOptions({
        fillOpacity: selectedDistrict === slug ? 0.12 : selectedDistrict ? 0.0 : 0.04,
        strokeOpacity: selectedDistrict === slug ? 0.6 : selectedDistrict ? 0.0 : 0.2,
        strokeWeight: selectedDistrict === slug ? 2 : 1,
        zIndex: selectedDistrict === slug ? 10 : 1,
      })
    })
  }, [selectedDistrict])

  const updateMarkers = useCallback(() => {
    if (!mapRef.current) return

    for (const marker of markersRef.current) {
      marker.map = null
    }
    markersRef.current = []

    const locs = getFilteredLocations(selectedDistrict, activeCategory)
    for (const loc of locs) {
      const emoji = CATEGORY_EMOJI[loc.category] ?? '📍'

      const pinEl = document.createElement('div')
      pinEl.innerHTML = emoji
      pinEl.style.cssText =
        'font-size:22px; cursor:pointer; transform:translate(-50%,-100%); transition:transform 0.15s ease; user-select:none'
      pinEl.addEventListener('mouseenter', () => {
        pinEl.style.transform = 'translate(-50%,-100%) scale(1.35)'
      })
      pinEl.addEventListener('mouseleave', () => {
        pinEl.style.transform = 'translate(-50%,-100%) scale(1)'
      })

      const marker = new google.maps.marker.AdvancedMarkerElement({
        position: { lat: loc.coordinates.lat, lng: loc.coordinates.lng },
        content: pinEl,
        map: mapRef.current,
        title: loc.title,
        zIndex: 1,
      })

      marker.addListener('click', () => {
        if (infoWindowRef.current) infoWindowRef.current.close()

        infoWindowRef.current = new google.maps.InfoWindow({
          content: `<div style="font-family:Inter,system-ui,sans-serif;max-width:240px;padding:4px 2px">
            <div style="display:flex;align-items:center;gap:8px;margin-bottom:8px">
              <span style="font-size:20px">${emoji}</span>
              <div>
                <div style="font-weight:600;font-size:14px;color:#111">${loc.title}</div>
                <div style="font-size:11px;color:#888;text-transform:capitalize">${loc.category.replace(/-/g, ' ')}</div>
              </div>
            </div>
            <p style="font-size:12px;color:#555;line-height:1.5;margin:0 0 8px 0">${loc.description.slice(0, 120)}...</p>
            <div style="display:flex;gap:6px">
              <a id="gm-detail-${loc.slug}" href="#" style="display:inline-block;padding:5px 12px;background:#f59e0b;color:#fff;border-radius:6px;font-size:12px;font-weight:500;text-decoration:none">View details →</a>
              <a href="https://www.openstreetmap.org/directions?to=${loc.coordinates.lat}%2C${loc.coordinates.lng}#map=14/${loc.coordinates.lat}/${loc.coordinates.lng}" target="_blank" style="display:inline-block;padding:5px 12px;border:1px solid #ddd;color:#555;border-radius:6px;font-size:12px;font-weight:500;text-decoration:none">Directions</a>
            </div>
          </div>`,
          position: { lat: loc.coordinates.lat, lng: loc.coordinates.lng },
        })

        infoWindowRef.current.open({ map: mapRef.current })

        google.maps.event.addListenerOnce(infoWindowRef.current, 'domready', () => {
          const detailLink = document.getElementById(`gm-detail-${loc.slug}`)
          if (detailLink) {
            detailLink.addEventListener('click', e => {
              e.preventDefault()
              infoWindowRef.current?.close()
              onMarkerClick?.(loc.slug)
            })
          }
        })
      })

      markersRef.current.push(marker)
    }
  }, [selectedDistrict, activeCategory, onMarkerClick])

  const initMap = useCallback(() => {
    if (!containerRef.current || mapRef.current) return

    const mapId = theme === 'light' ? '8d9353905262f6cc' : 'a04706469f7da75c'

    const map = new google.maps.Map(containerRef.current, {
      center: { lat: MAP.defaultCenter[1], lng: MAP.defaultCenter[0] },
      zoom: MAP.defaultZoom,
      minZoom: MAP.minZoom,
      maxZoom: MAP.maxZoom,
      mapId,
      disableDefaultUI: true,
      zoomControl: true,
      scrollwheel: true,
      mapTypeControl: false,
      streetViewControl: false,
      fullscreenControl: false,
      gestureHandling: 'greedy',
    })

    mapRef.current = map

    for (const feat of DISTRICT_BOUNDARIES.features) {
      const coords = ((feat.geometry as any).coordinates[0] as [number, number][]).map(
        ([lng, lat]) => ({ lat, lng })
      )

      const polygon = new google.maps.Polygon({
        paths: coords,
        strokeColor: '#f59e0b',
        strokeWeight: 1,
        strokeOpacity: 0.2,
        fillColor: '#f59e0b',
        fillOpacity: 0.04,
        map,
        zIndex: 1,
      })

      polygon.addListener('mouseover', () => {
        if (!selectedDistrict) {
          polygon.setOptions({ fillOpacity: 0.12, zIndex: 5 })
        }
      })
      polygon.addListener('mouseout', () => {
        if (!selectedDistrict) {
          polygon.setOptions({ fillOpacity: 0.04, zIndex: 1 })
        }
      })

      polygon.addListener('click', () => {
        onDistrictClick?.(feat.properties.slug)
      })

      polygonsRef.current.set(feat.properties.slug, polygon)
    }

    updateMarkers()

    return () => {
      mapRef.current = null
    }
  }, [])

  useEffect(() => {
    ensureGoogleMapsLoaded().then(() => {
      initMap()
    })
    return () => {
      mapRef.current = null
    }
  }, [initMap])

  useEffect(() => {
    if (!mapRef.current) return
    updateMarkers()
  }, [selectedDistrict, activeCategory, updateMarkers])

  useEffect(() => {
    if (!mapRef.current) return
    const map = mapRef.current
    const mapId = theme === 'light' ? '8d9353905262f6cc' : 'a04706469f7da75c'
    map.setOptions({ mapId })

    if (selectedDistrict !== prevDistrictRef.current) {
      prevDistrictRef.current = selectedDistrict
      updateDistrictStyles()

      if (selectedDistrict) {
        const feat = DISTRICT_BOUNDARIES.features.find(f => f.properties.slug === selectedDistrict)
        if (feat) {
          const bounds = new google.maps.LatLngBounds()
          const coords = (feat.geometry as any).coordinates[0] as [number, number][]
          for (const [lng, lat] of coords) bounds.extend({ lat, lng })
          map.fitBounds(bounds, {
            top: 80,
            right: 380,
            bottom: 80,
            left: 80,
          })
        }
      } else {
        map.setCenter({
          lat: MAP.defaultCenter[1],
          lng: MAP.defaultCenter[0],
        })
        map.setZoom(MAP.defaultZoom)
      }
    }
  }, [selectedDistrict, theme, updateDistrictStyles])

  return <div ref={containerRef} className={className} style={{ width: '100%', height: '100%' }} />
}
