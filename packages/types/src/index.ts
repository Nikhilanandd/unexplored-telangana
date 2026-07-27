export type Category =
  | 'waterfalls'
  | 'forts'
  | 'temples'
  | 'lakes'
  | 'reservoirs'
  | 'archaeological'
  | 'eco-tourism'
  | 'food'
  | 'viewpoints'
  | 'wildlife'
  | 'camping'
  | 'museums'
  | 'hidden-gems'

export const CATEGORIES: { id: Category; label: string; icon: string }[] = [
  { id: 'waterfalls', label: 'Waterfalls', icon: 'droplets' },
  { id: 'forts', label: 'Forts', icon: 'castle' },
  { id: 'temples', label: 'Temples', icon: 'temple' },
  { id: 'lakes', label: 'Lakes', icon: 'waves' },
  { id: 'reservoirs', label: 'Reservoirs', icon: 'dam' },
  { id: 'archaeological', label: 'Archaeological', icon: 'landmark' },
  { id: 'eco-tourism', label: 'Eco Tourism', icon: 'leaf' },
  { id: 'food', label: 'Food', icon: 'utensils' },
  { id: 'viewpoints', label: 'Viewpoints', icon: 'mountain' },
  { id: 'wildlife', label: 'Wildlife', icon: 'paw-print' },
  { id: 'camping', label: 'Camping', icon: 'campfire' },
  { id: 'museums', label: 'Museums', icon: 'building-2' },
  { id: 'hidden-gems', label: 'Hidden Gems', icon: 'gem' },
]

export interface Coordinates {
  lat: number
  lng: number
}

export interface LocationFrontmatter {
  title: string
  district: string
  category: Category
  coordinates: Coordinates
  bestSeason: string
  accessibility: string
  history: string
  travelTips: string[]
  nearbyAttractions: string[]
  images: string[]
  osmLink: string
}

export interface Location extends LocationFrontmatter {
  slug: string
  districtSlug: string
}

export interface District {
  name: string
  slug: string
  center: Coordinates
  zoom: number
  description: string
  knownFor: string[]
  locationCount: number
  boundingBox?: [number, number, number, number]
}

export interface GeoJSONFeature {
  type: 'Feature'
  properties: {
    name: string
    slug: string
    [key: string]: unknown
  }
  geometry: {
    type: 'Polygon' | 'MultiPolygon'
    coordinates: number[][][]
  }
}

export interface GeoJSONCollection {
  type: 'FeatureCollection'
  features: GeoJSONFeature[]
}

export type MapLayer =
  | 'all'
  | 'districts'
  | 'waterfalls'
  | 'forts'
  | 'temples'
  | 'lakes'
  | 'reservoirs'
  | 'archaeological'
  | 'eco-tourism'
  | 'food'
  | 'viewpoints'
  | 'wildlife'
  | 'camping'
  | 'museums'
  | 'hidden-gems'

export interface AppState {
  activeDistrict: string | null
  activeCategory: Category | null
  activeLayer: MapLayer
  mapView: {
    center: [number, number]
    zoom: number
    bearing: number
    pitch: number
  }
}
