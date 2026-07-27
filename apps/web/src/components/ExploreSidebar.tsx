import { useNavigate } from '@tanstack/react-router'
import { DISTRICTS, LOCATIONS } from '@ut/config'
import { CATEGORIES } from '@ut/types'
import type { Category } from '@ut/types'
import { Badge } from '@ut/ui'
import { Compass, ExternalLink, MapPin } from 'lucide-react'
import { AnimatePresence, motion } from 'motion/react'

interface ExploreSidebarProps {
  selectedDistrict: string | null
  activeCategory: Category | null
  onCategorySelect: (category: Category | null) => void
}

export function ExploreSidebar({
  selectedDistrict,
  activeCategory,
  onCategorySelect,
}: ExploreSidebarProps) {
  const navigate = useNavigate()

  const district = selectedDistrict ? DISTRICTS.find(d => d.slug === selectedDistrict) : null

  const visibleLocations = LOCATIONS.filter(l => {
    if (selectedDistrict && l.district !== selectedDistrict) return false
    if (activeCategory && l.category !== activeCategory) return false
    return true
  })

  const availableCategories = CATEGORIES.filter(c =>
    LOCATIONS.some(
      l => l.category === c.id && (!selectedDistrict || l.district === selectedDistrict)
    )
  )

  const handleOpenMaps = (lat: number, lng: number) => {
    window.open(
      `https://www.openstreetmap.org/directions?to=${lat}%2C${lng}#map=14/${lat}/${lng}`,
      '_blank'
    )
  }

  return (
    <div className="flex h-full flex-col overflow-hidden">
      <div className="shrink-0 border-b border-slate-200 px-5 py-4 dark:border-obsidian-800">
        {district ? (
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <Compass className="h-4 w-4 text-saffron-500" />
              <h2 className="font-serif text-lg font-semibold text-slate-900 dark:text-sand-100">
                {district.name}
              </h2>
            </div>
            <p className="text-xs leading-relaxed text-slate-500 dark:text-sand-400">
              {district.description}
            </p>
          </div>
        ) : (
          <div className="space-y-3">
            <h2 className="font-serif text-lg font-semibold text-slate-900 dark:text-sand-100">
              Explore Telangana
            </h2>
            <p className="text-xs leading-relaxed text-slate-500 dark:text-sand-400">
              Select a district or browse all {LOCATIONS.length} locations across 33 districts.
            </p>
          </div>
        )}
      </div>

      <div className="shrink-0 border-b border-slate-200 px-5 py-3 dark:border-obsidian-800">
        <p className="mb-2 text-[10px] font-medium uppercase tracking-[0.2em] text-slate-400 dark:text-sand-500">
          Filter by category
        </p>
        <div className="flex flex-wrap gap-1.5">
          <button
            onClick={() => onCategorySelect(null)}
            className={`rounded-full px-2.5 py-1 text-[11px] font-medium transition-all ${
              !activeCategory
                ? 'bg-saffron-500 text-white'
                : 'bg-slate-100 text-slate-600 hover:bg-slate-200 dark:bg-obsidian-800 dark:text-sand-400 dark:hover:bg-obsidian-700'
            }`}
          >
            All
          </button>
          {availableCategories.map(c => (
            <button
              key={c.id}
              onClick={() => onCategorySelect(c.id === activeCategory ? null : c.id)}
              className={`rounded-full px-2.5 py-1 text-[11px] font-medium transition-all ${
                activeCategory === c.id
                  ? 'bg-saffron-500 text-white'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200 dark:bg-obsidian-800 dark:text-sand-400 dark:hover:bg-obsidian-700'
              }`}
            >
              {c.label}
            </button>
          ))}
        </div>
      </div>

      <div className="flex-1 overflow-y-auto px-5 py-4">
        <p className="mb-3 text-[10px] font-medium uppercase tracking-[0.2em] text-slate-400 dark:text-sand-500">
          {visibleLocations.length} {visibleLocations.length === 1 ? 'Place' : 'Places'}
        </p>

        <div className="space-y-2">
          <AnimatePresence mode="popLayout">
            {visibleLocations.map((loc, i) => (
              <motion.button
                key={loc.slug}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ delay: Math.min(i * 0.02, 0.3), duration: 0.25 }}
                onClick={() => navigate({ to: '/locations/$slug', params: { slug: loc.slug } })}
                className="group flex w-full items-start gap-3 rounded-lg p-3 text-left transition-colors hover:bg-slate-50 dark:hover:bg-obsidian-800/50"
              >
                <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-slate-100 text-base dark:bg-obsidian-800">
                  <MapPin className="h-4 w-4 text-saffron-500" />
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="text-sm font-medium text-slate-800 group-hover:text-slate-900 dark:text-sand-200 dark:group-hover:text-sand-100">
                    {loc.title}
                  </h4>
                  <p className="mt-0.5 line-clamp-2 text-[11px] leading-relaxed text-slate-500 dark:text-sand-400">
                    {loc.description.slice(0, 100)}...
                  </p>
                  <div className="mt-2 flex items-center gap-2">
                    <Badge variant="saffron">
                      <span className="text-[10px]">{loc.category.replace(/-/g, ' ')}</span>
                    </Badge>
                    <span className="text-[10px] text-slate-400 dark:text-sand-500">
                      {loc.bestSeason}
                    </span>
                    <span
                      onClick={e => {
                        e.stopPropagation()
                        handleOpenMaps(loc.coordinates.lat, loc.coordinates.lng)
                      }}
                      className="ml-auto flex shrink-0 items-center gap-1 rounded px-1.5 py-0.5 text-[10px] text-saffron-500 transition-colors hover:bg-saffron-500/10"
                    >
                      <ExternalLink className="h-3 w-3" />
                      Directions
                    </span>
                  </div>
                </div>
              </motion.button>
            ))}
          </AnimatePresence>

          {visibleLocations.length === 0 && (
            <div className="py-12 text-center">
              <p className="text-sm text-slate-400 dark:text-sand-500">
                No places match this filter.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
