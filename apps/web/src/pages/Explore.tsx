import { useNavigate } from '@tanstack/react-router'
import type { Category } from '@ut/types'
import { Compass } from 'lucide-react'
import { useState } from 'react'
import { DistrictSelector } from '../components/DistrictSelector'
import { ExploreSidebar } from '../components/ExploreSidebar'
import { MapView } from '../components/MapView'

export default function Explore() {
  const navigate = useNavigate()
  const [selectedDistrict, setSelectedDistrict] = useState<string | null>(null)
  const [activeCategory, setActiveCategory] = useState<Category | null>(null)

  const handleDistrictClick = (slug: string) => {
    setSelectedDistrict(slug === selectedDistrict ? null : slug)
  }

  const handleMarkerClick = (slug: string) => {
    navigate({ to: '/locations/$slug', params: { slug } })
  }

  return (
    <div className="relative flex h-[calc(100vh-4rem)] overflow-hidden">
      <div className="absolute inset-0">
        <MapView
          className="h-full w-full"
          selectedDistrict={selectedDistrict}
          activeCategory={activeCategory}
          onDistrictClick={handleDistrictClick}
          onMarkerClick={handleMarkerClick}
        />
      </div>

      <div className="pointer-events-none absolute inset-0 z-10">
        <div className="pointer-events-auto mx-auto flex h-full max-w-7xl">
          <div className="flex w-full flex-row px-4 pb-4">
            <div className="mr-auto mt-4 flex flex-1 flex-col">
              <div className="w-72 rounded-2xl border border-slate-200/80 bg-white/90 shadow-lg backdrop-blur-xl dark:border-obsidian-700/80 dark:bg-obsidian-950/90">
                <div className="p-4">
                  <DistrictSelector
                    selectedDistrict={selectedDistrict}
                    onSelect={setSelectedDistrict}
                  />
                </div>
              </div>
            </div>

            <div className="ml-4 mt-4 w-[340px] shrink-0 rounded-2xl border border-slate-200/80 bg-white/90 shadow-lg backdrop-blur-xl dark:border-obsidian-700/80 dark:bg-obsidian-950/90 overflow-hidden">
              <ExploreSidebar
                selectedDistrict={selectedDistrict}
                activeCategory={activeCategory}
                onCategorySelect={setActiveCategory}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute bottom-6 left-1/2 z-10 -translate-x-1/2">
        <div className="pointer-events-auto rounded-full border border-slate-200/80 bg-white/90 px-4 py-2 shadow-lg backdrop-blur-xl dark:border-obsidian-700/80 dark:bg-obsidian-950/90">
          <p className="font-mono text-[10px] tracking-wider text-slate-400 dark:text-sand-500">
            <Compass className="mr-1 inline h-3 w-3" />
            Click a district on the map or use the selector above
          </p>
        </div>
      </div>
    </div>
  )
}
