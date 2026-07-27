import { MAP } from '@ut/config'
import type { Coordinates } from '@ut/types'
import maplibregl from 'maplibre-gl'
import { useCallback, useEffect, useRef } from 'react'

interface MapProps {
  onDistrictClick?: (districtSlug: string) => void
  markers?: Array<{
    coordinates: Coordinates
    title: string
    category: string
    slug: string
  }>
  onMarkerClick?: (slug: string) => void
  className?: string
  interactive?: boolean
}

export function Map({ markers, onMarkerClick, className, interactive = true }: MapProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const mapRef = useRef<maplibregl.Map | null>(null)
  const markersRef = useRef<maplibregl.Marker[]>([])

  const clearMarkers = useCallback(() => {
    for (const marker of markersRef.current) {
      marker.remove()
    }
    markersRef.current = []
  }, [])

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

  useEffect(() => {
    if (!mapRef.current || !markers) return

    clearMarkers()

    for (const markerData of markers) {
      const el = document.createElement('div')
      el.className = 'marker-dot'
      const color = '#f59e0b'
      el.style.cssText = `
        width: 12px; height: 12px;
        background: ${color};
        border: 2px solid #201810;
        border-radius: 50%;
        cursor: pointer;
        transition: transform 0.2s ease;
      `
      el.addEventListener('mouseenter', () => {
        el.style.transform = 'scale(1.5)'
      })
      el.addEventListener('mouseleave', () => {
        el.style.transform = 'scale(1)'
      })

      if (onMarkerClick) {
        el.addEventListener('click', () => onMarkerClick(markerData.slug))
      }

      const marker = new maplibregl.Marker({ element: el })
        .setLngLat([markerData.coordinates.lng, markerData.coordinates.lat])
        .addTo(mapRef.current)

      markersRef.current.push(marker)
    }
  }, [markers, clearMarkers, onMarkerClick])

  return <div ref={containerRef} className={className} style={{ width: '100%', height: '100%' }} />
}
