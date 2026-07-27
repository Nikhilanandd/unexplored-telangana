import { DISTRICT_BOUNDARIES, LOCATIONS, MAP } from '@ut/config'
import type { Category } from '@ut/types'
import maplibregl from 'maplibre-gl'
import { useCallback, useEffect, useRef } from 'react'
import { useTheme } from '../theme'

const CATEGORY_COLORS: Record<string, string> = {
  waterfalls: '#3b82f6',
  forts: '#78716c',
  temples: '#f59e0b',
  lakes: '#06b6d4',
  reservoirs: '#0ea5e9',
  archaeological: '#a16207',
  'eco-tourism': '#22c55e',
  food: '#ef4444',
  viewpoints: '#84cc16',
  wildlife: '#15803d',
  camping: '#d97706',
  museums: '#8b5cf6',
  'hidden-gems': '#ec4899',
}

interface MapViewProps {
  selectedDistrict?: string | null
  activeCategory?: Category | null
  onDistrictClick?: (slug: string) => void
  onMarkerClick?: (slug: string) => void
  className?: string
}

function buildLocationGeoJSON(
  district: string | null | undefined,
  category: Category | null | undefined
) {
  let locs = [...LOCATIONS]
  if (district) locs = locs.filter(l => l.district === district)
  if (category) locs = locs.filter(l => l.category === category)
  return {
    type: 'FeatureCollection' as const,
    features: locs.map(l => ({
      type: 'Feature' as const,
      geometry: {
        type: 'Point' as const,
        coordinates: [l.coordinates.lng, l.coordinates.lat],
      },
      properties: {
        title: l.title,
        slug: l.slug,
        category: l.category,
        color: CATEGORY_COLORS[l.category] ?? '#f59e0b',
      },
    })),
  }
}

function addMapLayers(map: maplibregl.Map) {
  map.addSource('district-boundaries', {
    type: 'geojson',
    data: DISTRICT_BOUNDARIES as any,
  })

  map.addLayer({
    id: 'district-fills',
    type: 'fill',
    source: 'district-boundaries',
    paint: { 'fill-color': '#f59e0b', 'fill-opacity': 0.08 },
  })

  map.addLayer({
    id: 'district-outlines',
    type: 'line',
    source: 'district-boundaries',
    paint: { 'line-color': '#f59e0b', 'line-width': 0.8, 'line-opacity': 0.25 },
  })

  map.addSource('locations', {
    type: 'geojson',
    data: { type: 'FeatureCollection', features: [] },
    cluster: true,
    clusterMaxZoom: MAP.clusterMaxZoom,
    clusterRadius: MAP.clusterRadius,
  })

  map.addLayer({
    id: 'clusters',
    type: 'circle',
    source: 'locations',
    filter: ['has', 'point_count'],
    paint: {
      'circle-color': ['step', ['get', 'point_count'], '#f59e0b', 10, '#c46848', 30, '#3b82f6'],
      'circle-radius': ['step', ['get', 'point_count'], 18, 10, 24, 30, 32],
      'circle-stroke-width': 2,
      'circle-stroke-color': '#ffffff',
      'circle-opacity': 0.9,
    },
  })

  map.addLayer({
    id: 'cluster-count',
    type: 'symbol',
    source: 'locations',
    filter: ['has', 'point_count'],
    layout: {
      'text-field': '{point_count_abbreviated}',
      'text-font': ['Inter Bold'],
      'text-size': 12,
    },
    paint: { 'text-color': '#ffffff' },
  })

  map.addLayer({
    id: 'markers-layer',
    type: 'circle',
    source: 'locations',
    filter: ['!', ['has', 'point_count']],
    paint: {
      'circle-radius': 5,
      'circle-color': ['get', 'color'],
      'circle-stroke-width': 1.5,
      'circle-stroke-color': '#ffffff',
      'circle-opacity': 0.9,
    },
  })
}

function bindMapEvents(
  map: maplibregl.Map,
  onDistrictClick?: (slug: string) => void,
  onMarkerClick?: (slug: string) => void
) {
  map.on('click', 'district-fills', e => {
    const slug = (e.features?.[0]?.properties as any)?.slug as string | undefined
    if (slug) onDistrictClick?.(slug)
  })

  map.on('mouseenter', 'district-fills', () => {
    map.getCanvas().style.cursor = 'pointer'
  })
  map.on('mouseleave', 'district-fills', () => {
    map.getCanvas().style.cursor = ''
  })

  map.on('click', 'markers-layer', e => {
    const slug = (e.features?.[0]?.properties as any)?.slug as string | undefined
    if (slug) onMarkerClick?.(slug)
  })
  map.on('mouseenter', 'markers-layer', () => {
    map.getCanvas().style.cursor = 'pointer'
  })
  map.on('mouseleave', 'markers-layer', () => {
    map.getCanvas().style.cursor = ''
  })

  map.on('click', 'clusters', e => {
    const features = map.queryRenderedFeatures(e.point, { layers: ['clusters'] })
    const clusterId = features[0]?.properties?.cluster_id
    if (clusterId != null) {
      const source = map.getSource('locations') as maplibregl.GeoJSONSource
      source.getClusterExpansionZoom(clusterId).then(zoom => {
        const geom = (features[0] as any)?.geometry
        if (geom?.coordinates && zoom != null) {
          map.flyTo({
            center: geom.coordinates as [number, number],
            zoom: zoom,
            duration: 800,
          })
        }
      })
    }
  })
}

export function MapView({
  selectedDistrict,
  activeCategory,
  onDistrictClick,
  onMarkerClick,
  className,
}: MapViewProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const mapRef = useRef<maplibregl.Map | null>(null)
  const layersReadyRef = useRef(false)
  const prevDistrictRef = useRef<string | null | undefined>(null)
  const { theme } = useTheme()

  const initMap = useCallback(() => {
    if (!containerRef.current || mapRef.current) return

    const style = theme === 'light' ? MAP.styleLight : ((MAP as any).styleDark ?? MAP.style)
    const map = new maplibregl.Map({
      container: containerRef.current,
      style,
      center: MAP.defaultCenter,
      zoom: MAP.defaultZoom,
      minZoom: MAP.minZoom,
      maxZoom: MAP.maxZoom,
      pitch: MAP.pitch,
      bearing: MAP.bearing,
      attributionControl: false,
    })

    map.addControl(new maplibregl.AttributionControl({ compact: true }), 'bottom-left')
    map.addControl(
      new maplibregl.NavigationControl({ showCompass: true, showZoom: true }),
      'bottom-right'
    )

    map.on('load', () => {
      mapRef.current = map
      layersReadyRef.current = true
      addMapLayers(map)
      bindMapEvents(map, onDistrictClick, onMarkerClick)

      const geoJSON = buildLocationGeoJSON(selectedDistrict, activeCategory)
      const src = map.getSource('locations') as maplibregl.GeoJSONSource
      if (src) src.setData(geoJSON as any)
    })

    return () => {
      map.remove()
      mapRef.current = null
      layersReadyRef.current = false
    }
  }, [])

  useEffect(() => {
    initMap()
    return () => {
      mapRef.current?.remove()
      mapRef.current = null
    }
  }, [initMap])

  useEffect(() => {
    if (!mapRef.current) return
    const map = mapRef.current
    const style = theme === 'light' ? MAP.styleLight : ((MAP as any).styleDark ?? MAP.style)

    const handleStyleLoad = () => {
      layersReadyRef.current = true
      addMapLayers(map)
      bindMapEvents(map, onDistrictClick, onMarkerClick)
      const geoJSON = buildLocationGeoJSON(selectedDistrict, activeCategory)
      const src = map.getSource('locations') as maplibregl.GeoJSONSource
      if (src) src.setData(geoJSON as any)
    }

    layersReadyRef.current = false
    map.setStyle(style, { diff: false })
    map.once('style.load', handleStyleLoad)
  }, [theme])

  useEffect(() => {
    if (!mapRef.current || !layersReadyRef.current) return

    const geoJSON = buildLocationGeoJSON(selectedDistrict, activeCategory)
    const src = mapRef.current.getSource('locations') as maplibregl.GeoJSONSource
    if (src) src.setData(geoJSON as any)

    if (selectedDistrict !== prevDistrictRef.current) {
      prevDistrictRef.current = selectedDistrict

      if (selectedDistrict) {
        const feat = DISTRICT_BOUNDARIES.features.find(f => f.properties.slug === selectedDistrict)
        if (feat) {
          mapRef.current.setPaintProperty('district-fills', 'fill-opacity', [
            'case',
            ['==', ['get', 'slug'], selectedDistrict],
            0.15,
            0.0,
          ])
          mapRef.current.setPaintProperty('district-outlines', 'line-opacity', [
            'case',
            ['==', ['get', 'slug'], selectedDistrict],
            0.6,
            0.0,
          ])

          const bounds = new maplibregl.LngLatBounds()
          const coords = (feat.geometry as { type: string; coordinates: number[][][] })
            .coordinates[0] as [number, number][]
          for (const c of coords) bounds.extend(c)
          mapRef.current.fitBounds(bounds, {
            padding: 80,
            duration: 1200,
            maxZoom: 12,
          })
        }
      } else {
        mapRef.current.setPaintProperty('district-fills', 'fill-opacity', 0.08)
        mapRef.current.setPaintProperty('district-outlines', 'line-opacity', 0.25)
      }
    }
  }, [selectedDistrict, activeCategory])

  return <div ref={containerRef} className={className} style={{ width: '100%', height: '100%' }} />
}
