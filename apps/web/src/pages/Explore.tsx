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
    <div className="relative flex h-[calc(100vh-4rem)] overflow-hidden">
      <div className="absolute inset-0">
        <MapComponent
          className="h-full w-full"
          selectedDistrict={selectedDistrict}
          activeCategory={activeCategory}
          onDistrictClick={handleDistrictClick}
          onMarkerClick={handleMarkerClick}
        />
      </div>

      <div className="pointer-events-none absolute inset-0 z-10">
        <div className="pointer-events-auto mx-auto flex h-full max-w-7xl">
          <div className="flex w-full flex-col gap-3 px-4 pb-4">
            <div className="flex items-start justify-between pt-4">
              <div className="w-72 rounded-2xl border border-slate-200/80 bg-white/90 shadow-lg backdrop-blur-xl dark:border-obsidian-700/80 dark:bg-obsidian-950/90">
                <div className="p-4">
                  <DistrictSelector
                    selectedDistrict={selectedDistrict}
                    onSelect={setSelectedDistrict}
                  />
                </div>
              </div>

              {hasGoogleKey && (
                <div className="flex rounded-xl border border-slate-200/80 bg-white/90 shadow-sm backdrop-blur-xl dark:border-obsidian-700/80 dark:bg-obsidian-950/90">
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
              )}
            </div>

            <div className="flex-1 flex justify-end">
              <div className="w-[340px] shrink-0 rounded-2xl border border-slate-200/80 bg-white/90 shadow-lg backdrop-blur-xl dark:border-obsidian-700/80 dark:bg-obsidian-950/90 overflow-hidden h-fit max-h-[calc(100vh-10rem)]">
                <ExploreSidebar
                  selectedDistrict={selectedDistrict}
                  activeCategory={activeCategory}
                  onCategorySelect={setActiveCategory}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
