import { useNavigate } from '@tanstack/react-router'
import { DISTRICTS } from '@ut/config'
import { CATEGORIES } from '@ut/types'
import type { Category } from '@ut/types'
import { Button } from '@ut/ui'
import { ArrowRight, ChevronDown, Compass, MapPin, Search } from 'lucide-react'
import { motion } from 'motion/react'
import { useState } from 'react'
import { Map } from '../components/Map'
import { useStore } from '../store'

export default function Landing() {
  const navigate = useNavigate()
  const searchQuery = useStore(s => s.searchQuery)
  const setSearchQuery = useStore(s => s.setSearchQuery)
  const setActiveDistrict = useStore(s => s.setActiveDistrict)
  const [showDistricts, setShowDistricts] = useState(false)

  const filteredDistricts = DISTRICTS.filter(
    d =>
      d.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      d.description.toLowerCase().includes(searchQuery.toLowerCase())
  )

  const handleDistrictSelect = (slug: string) => {
    setActiveDistrict(slug)
    navigate({ to: '/districts/$slug', params: { slug } })
  }

  const handleCategorySelect = (category: Category) => {
    navigate({
      to: '/districts/$slug',
      params: { slug: 'all' },
      search: { category },
    })
  }

  return (
    <div className="relative h-[calc(100vh-4rem)] w-full overflow-hidden">
      <Map className="absolute inset-0" />

      <div className="pointer-events-none absolute inset-x-0 bottom-0 top-0 z-10">
        <div className="mx-auto flex h-full max-w-6xl flex-col justify-center px-6 pb-32">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="pointer-events-auto max-w-2xl"
          >
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="font-mono text-xs uppercase tracking-[0.3em] text-saffron-400"
            >
              Explore the untold Telangana
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="mt-6 font-serif text-5xl font-bold leading-tight text-sand-100 md:text-7xl"
            >
              Every district
              <br />
              has a story.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="mt-6 max-w-lg text-lg leading-relaxed text-sand-400"
            >
              From Kakatiya ruins to hidden waterfalls, from tribal festivals to forgotten forts —
              uncover Telangana beyond the guidebooks.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.6 }}
              className="pointer-events-auto mt-10 flex flex-wrap items-center gap-4"
            >
              <div className="relative w-full max-w-sm">
                <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-sand-500" />
                <input
                  type="text"
                  placeholder="Search districts, temples, waterfalls..."
                  value={searchQuery}
                  onChange={e => setSearchQuery(e.target.value)}
                  className="h-12 w-full rounded-xl border border-obsidian-600 bg-obsidian-800/90 pl-10 pr-4 text-sm text-sand-100 placeholder:text-sand-500 backdrop-blur-md focus:border-saffron-500 focus:outline-none focus:ring-1 focus:ring-saffron-500"
                />
              </div>

              <div className="relative">
                <Button
                  variant="secondary"
                  size="lg"
                  onClick={() => setShowDistricts(!showDistricts)}
                >
                  <MapPin className="h-4 w-4" />
                  Browse Districts
                  <ChevronDown
                    className={`h-4 w-4 transition-transform ${showDistricts ? 'rotate-180' : ''}`}
                  />
                </Button>

                {showDistricts && (
                  <motion.div
                    initial={{ opacity: 0, y: -8 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="absolute left-0 top-full mt-2 max-h-64 w-72 overflow-y-auto rounded-xl border border-obsidian-600 bg-obsidian-800/95 p-1 backdrop-blur-xl"
                  >
                    {filteredDistricts.map(d => (
                      <button
                        key={d.slug}
                        onClick={() => {
                          handleDistrictSelect(d.slug)
                          setShowDistricts(false)
                        }}
                        className="flex w-full items-center gap-3 rounded-lg px-3 py-2 text-left text-sm text-sand-300 transition-colors hover:bg-obsidian-700 hover:text-sand-100"
                      >
                        <MapPin className="h-3.5 w-3.5 shrink-0 text-saffron-500" />
                        <span>{d.name}</span>
                      </button>
                    ))}
                  </motion.div>
                )}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.8, duration: 0.6 }}
              className="pointer-events-auto mt-16"
            >
              <p className="mb-4 font-mono text-xs uppercase tracking-[0.2em] text-sand-500">
                Explore by category
              </p>
              <div className="flex flex-wrap gap-3">
                {CATEGORIES.slice(0, 8).map(cat => (
                  <button
                    key={cat.id}
                    onClick={() => handleCategorySelect(cat.id)}
                    className="rounded-full border border-obsidian-600 bg-obsidian-800/60 px-4 py-2 text-sm text-sand-300 backdrop-blur-sm transition-all hover:border-saffron-500/50 hover:bg-obsidian-700 hover:text-sand-100"
                  >
                    {cat.label}
                  </button>
                ))}
                <button
                  onClick={() =>
                    navigate({
                      to: '/districts/$slug',
                      params: { slug: 'all' },
                    })
                  }
                  className="group inline-flex items-center gap-1 rounded-full border border-saffron-500/30 bg-saffron-500/10 px-4 py-2 text-sm text-saffron-400 backdrop-blur-sm transition-all hover:bg-saffron-500/20"
                >
                  View all
                  <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                </button>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-6 right-6 z-10 rounded-full border border-obsidian-600 bg-obsidian-800/80 px-4 py-2 backdrop-blur-md">
        <p className="font-mono text-xs text-sand-400">
          <Compass className="mr-1.5 inline h-3 w-3" />
          Scroll to explore · Drag to pan
        </p>
      </div>
    </div>
  )
}
