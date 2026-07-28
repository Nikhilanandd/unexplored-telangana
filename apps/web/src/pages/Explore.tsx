import { useNavigate } from '@tanstack/react-router'
import type { Category } from '@ut/types'
import { useState } from 'react'
import { DistrictSelector } from '../components/DistrictSelector'
import { ExploreSidebar } from '../components/ExploreSidebar'
import { GoogleMapView } from '../components/GoogleMapView'
import { MapView } from '../components/MapView'
import { Map, Globe } from 'lucide-react'

type MapProvider = 'maplibre' | 'google'

export default function Explore() {
  const navigate = useNavigate()
  const [selectedDistrict, setSelectedDistrict] = useState<string | null>(null)
  const [activeCategory, setActiveCategory] = useState<Category | null>(null)
  const [mapProvider, setMapProvider] = useState<MapProvider>('maplibre')

  const handleDistrictClick = (slug: string) => {
    setSelectedDistrict(slug === selectedDistrict ? null : slug)
  }

  const handleMarkerClick = (slug: string) => {
    navigate({ to: '/locations/$slug', params: { slug } })
  }

  const MapComponent = mapProvider === 'google' ? GoogleMapView : MapView

  const hasGoogleKey = !!(import.meta as any).env?.VITE_GOOGLE_MAPS_API_KEY

  return (
    <div className="relative flex h-[calc(100vh-4rem)]">
      <MapComponent
        className="h-full w-full"
        selectedDistrict={selectedDistrict}
        activeCategory={activeCategory}
        onDistrictClick={handleDistrictClick}
        onMarkerClick={handleMarkerClick}
      />

      <div className="pointer-events-none absolute left-4 top-4 z-10">
        <div className="pointer-events-auto w-72 rounded-2xl border border-slate-200/80 bg-white/90 shadow-lg backdrop-blur-xl dark:border-obsidian-700/80 dark:bg-obsidian-950/90">
          <div className="p-4">
            <DistrictSelector selectedDistrict={selectedDistrict} onSelect={setSelectedDistrict} />
          </div>
        </div>
      </div>

      {hasGoogleKey && (
        <div className="pointer-events-none absolute right-4 top-4 z-10">
          <div className="pointer-events-auto flex rounded-xl border border-slate-200/80 bg-white/90 shadow-sm backdrop-blur-xl dark:border-obsidian-700/80 dark:bg-obsidian-950/90">
            <button
              onClick={() => setMapProvider('maplibre')}
              className={`flex items-center gap-1.5 rounded-l-xl px-3 py-2 text-xs font-medium transition-all ${
                mapProvider === 'maplibre'
                  ? 'bg-saffron-500 text-white'
                  : 'text-slate-500 hover:bg-slate-50 dark:text-sand-400 dark:hover:bg-obsidian-800'
              }`}
            >
              <Globe className="h-3.5 w-3.5" />
              MapLibre
            </button>
            <button
              onClick={() => setMapProvider('google')}
              className={`flex items-center gap-1.5 rounded-r-xl px-3 py-2 text-xs font-medium transition-all ${
                mapProvider === 'google'
                  ? 'bg-saffron-500 text-white'
                  : 'text-slate-500 hover:bg-slate-50 dark:text-sand-400 dark:hover:bg-obsidian-800'
              }`}
            >
              <Map className="h-3.5 w-3.5" />
              Google
            </button>
          </div>
        </div>
      )}

      <div className="pointer-events-none absolute bottom-4 right-4 top-4 z-10">
        <div className="pointer-events-auto h-full w-[340px] rounded-2xl border border-slate-200/80 bg-white/90 shadow-lg backdrop-blur-xl dark:border-obsidian-700/80 dark:bg-obsidian-950/90 overflow-hidden">
          <ExploreSidebar
            selectedDistrict={selectedDistrict}
            activeCategory={activeCategory}
            onCategorySelect={setActiveCategory}
          />
        </div>
      </div>
    </div>
  )
}
