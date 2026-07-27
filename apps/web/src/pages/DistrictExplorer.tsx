import { useNavigate, useParams } from '@tanstack/react-router'
import { DISTRICTS, LOCATIONS } from '@ut/config'
import { CATEGORIES } from '@ut/types'
import type { Category } from '@ut/types'
import { Badge, Button, Card } from '@ut/ui'
import {
  ArrowLeft,
  ChevronLeft,
  ChevronRight,
  Clock,
  ExternalLink,
  MapPin,
  Navigation,
  Sparkles,
} from 'lucide-react'
import { motion } from 'motion/react'
import { useMemo, useState } from 'react'
import { Map } from '../components/Map'
import { useStore } from '../store'

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

export default function DistrictExplorer() {
  const { slug } = useParams({ from: '/districts/$slug' })
  const navigate = useNavigate()
  const setActiveDistrict = useStore(s => s.setActiveDistrict)
  const [activeTab, setActiveTab] = useState<'info' | 'locations'>('info')
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(null)

  const district = DISTRICTS.find(d => d.slug === slug)
  const districtIndex = DISTRICTS.findIndex(d => d.slug === slug)

  const districtLocations = useMemo(
    () =>
      LOCATIONS.filter(l => {
        if (slug === 'all') return !selectedCategory || l.category === selectedCategory
        return l.district === slug && (!selectedCategory || l.category === selectedCategory)
      }),
    [slug, selectedCategory]
  )

  const prevDistrict = districtIndex > 0 ? DISTRICTS[districtIndex - 1] : null
  const nextDistrict = districtIndex < DISTRICTS.length - 1 ? DISTRICTS[districtIndex + 1] : null

  if (!district) {
    return (
      <div className="flex h-[calc(100vh-4rem)] items-center justify-center">
        <div className="text-center">
          <p className="text-2xl text-sand-400">District not found</p>
          <Button className="mt-4" onClick={() => navigate({ to: '/' })}>
            Go back
          </Button>
        </div>
      </div>
    )
  }

  const handleOpenMaps = (_title: string, lat: number, lng: number) => {
    window.open(
      `https://www.openstreetmap.org/directions?to=${lat}%2C${lng}#map=14/${lat}/${lng}`,
      '_blank'
    )
  }

  return (
    <div className="flex h-[calc(100vh-4rem)]">
      <motion.aside
        initial={{ x: -400, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ type: 'spring', damping: 30, stiffness: 300 }}
        className="relative z-20 flex h-full w-[420px] shrink-0 flex-col border-r border-obsidian-800 bg-obsidian-950 overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-obsidian-950 via-obsidian-950 to-obsidian-900" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(197,79,7,0.08)_0%,transparent_60%)]" />

        <div className="relative flex-1 overflow-y-auto px-6 py-8">
          <div className="mb-8 flex items-center justify-between">
            <button
              onClick={() => {
                setActiveDistrict(null)
                navigate({ to: '/' })
              }}
              className="flex items-center gap-2 text-sm text-sand-400 transition-colors hover:text-sand-200"
            >
              <ArrowLeft className="h-4 w-4" />
              All Districts
            </button>

            <div className="flex gap-1">
              {prevDistrict && (
                <button
                  onClick={() =>
                    navigate({ to: '/districts/$slug', params: { slug: prevDistrict.slug } })
                  }
                  className="rounded-lg p-1.5 text-sand-500 transition-colors hover:bg-obsidian-800 hover:text-sand-300"
                >
                  <ChevronLeft className="h-4 w-4" />
                </button>
              )}
              {nextDistrict && (
                <button
                  onClick={() =>
                    navigate({ to: '/districts/$slug', params: { slug: nextDistrict.slug } })
                  }
                  className="rounded-lg p-1.5 text-sand-500 transition-colors hover:bg-obsidian-800 hover:text-sand-300"
                >
                  <ChevronRight className="h-4 w-4" />
                </button>
              )}
            </div>
          </div>

          <div className="mb-8">
            <div className="mb-3 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-saffron-500/10">
                <MapPin className="h-5 w-5 text-saffron-400" />
              </div>
              <div>
                <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-saffron-500">
                  District Explorer
                </p>
              </div>
            </div>

            <motion.h1
              key={slug}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="font-serif text-3xl font-bold leading-tight text-sand-100"
            >
              {district.name}
            </motion.h1>

            <p className="mt-3 text-sm leading-relaxed text-sand-400">{district.description}</p>
          </div>

          <div className="mb-6 flex gap-1 rounded-xl bg-obsidian-800 p-1">
            {(['info', 'locations'] as const).map(tab => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`flex-1 rounded-lg px-4 py-2 text-sm font-medium transition-all ${
                  activeTab === tab
                    ? 'bg-obsidian-700 text-sand-100 shadow-sm'
                    : 'text-sand-500 hover:text-sand-300'
                }`}
              >
                {tab === 'info' ? 'Overview' : `Places (${districtLocations.length})`}
              </button>
            ))}
          </div>

          {activeTab === 'info' && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-6">
              <div className="grid grid-cols-2 gap-3">
                <Card className="p-4">
                  <div className="flex items-center gap-2 text-sand-400">
                    <MapPin className="h-4 w-4" />
                    <p className="text-xs font-medium uppercase tracking-wide">Places</p>
                  </div>
                  <p className="mt-2 font-serif text-2xl font-semibold text-sand-100">
                    {districtLocations.length}
                  </p>
                </Card>
                <Card className="p-4">
                  <div className="flex items-center gap-2 text-sand-400">
                    <Sparkles className="h-4 w-4" />
                    <p className="text-xs font-medium uppercase tracking-wide">Known For</p>
                  </div>
                  <p className="mt-2 text-sm text-sand-300">
                    {district.knownFor.slice(0, 2).join(', ')}
                  </p>
                </Card>
              </div>

              <div>
                <h3 className="mb-3 font-serif text-lg font-semibold text-sand-200">Known for</h3>
                <div className="flex flex-wrap gap-2">
                  {district.knownFor.map(k => (
                    <Badge key={k} variant="saffron">
                      {k.replace(/-/g, ' ')}
                    </Badge>
                  ))}
                </div>
              </div>

              <Button
                variant="primary"
                className="w-full"
                onClick={() => setActiveTab('locations')}
              >
                <MapPin className="h-4 w-4" />
                Browse {districtLocations.length} Places
              </Button>
            </motion.div>
          )}

          {activeTab === 'locations' && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-4">
              <div className="flex flex-wrap gap-1.5 pb-2">
                <button
                  onClick={() => setSelectedCategory(null)}
                  className={`rounded-full px-3 py-1 text-xs transition-all ${
                    !selectedCategory
                      ? 'bg-saffron-500/20 text-saffron-400 border border-saffron-500/40'
                      : 'text-sand-400 border border-obsidian-600 hover:border-sand-600'
                  }`}
                >
                  All
                </button>
                {CATEGORIES.filter(c => districtLocations.some(l => l.category === c.id)).map(c => (
                  <button
                    key={c.id}
                    onClick={() => setSelectedCategory(c.id)}
                    className={`rounded-full px-3 py-1 text-xs transition-all ${
                      selectedCategory === c.id
                        ? 'bg-saffron-500/20 text-saffron-400 border border-saffron-500/40'
                        : 'text-sand-400 border border-obsidian-600 hover:border-sand-600'
                    }`}
                  >
                    {c.label}
                  </button>
                ))}
              </div>

              {districtLocations.length === 0 ? (
                <div className="rounded-xl border border-obsidian-700 bg-obsidian-800/30 p-8 text-center">
                  <MapPin className="mx-auto mb-3 h-8 w-8 text-sand-600" />
                  <p className="text-sm text-sand-400">No locations found for this filter.</p>
                </div>
              ) : (
                districtLocations.map((loc, i) => (
                  <motion.div
                    key={loc.slug}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.04 }}
                  >
                    <Card
                      className="cursor-pointer transition-all hover:border-saffron-500/30 hover:bg-obsidian-800/80"
                      onClick={() =>
                        navigate({ to: '/locations/$slug', params: { slug: loc.slug } })
                      }
                    >
                      <div className="flex items-start gap-3">
                        <div className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-obsidian-700 text-lg">
                          {CATEGORY_EMOJI[loc.category] ?? '📍'}
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="font-serif text-base font-semibold text-sand-100 truncate">
                            {loc.title}
                          </h4>
                          <p className="mt-1 line-clamp-2 text-xs leading-relaxed text-sand-400">
                            {loc.description}
                          </p>
                          <div className="mt-3 flex flex-wrap items-center gap-2">
                            <Badge variant="saffron">{loc.category.replace(/-/g, ' ')}</Badge>
                            <span className="text-[10px] text-sand-500">{loc.bestSeason}</span>
                            <button
                              onClick={e => {
                                e.stopPropagation()
                                handleOpenMaps(loc.title, loc.coordinates.lat, loc.coordinates.lng)
                              }}
                              className="ml-auto flex items-center gap-1 rounded-md px-2 py-1 text-[10px] text-saffron-400 transition-colors hover:bg-saffron-500/10"
                            >
                              <ExternalLink className="h-3 w-3" />
                              Directions
                            </button>
                          </div>
                        </div>
                      </div>
                    </Card>
                  </motion.div>
                ))
              )}
            </motion.div>
          )}
        </div>

        <div className="relative border-t border-obsidian-800 bg-obsidian-900/50 px-6 py-4">
          <div className="flex items-center gap-3">
            <Clock className="h-4 w-4 text-saffron-500" />
            <p className="text-xs text-sand-500">Best time: October – March</p>
          </div>
          <div className="mt-2 flex items-center gap-3">
            <Navigation className="h-4 w-4 text-saffron-500" />
            <p className="text-xs text-sand-500">
              {district.center.lat.toFixed(3)}, {district.center.lng.toFixed(3)}
            </p>
          </div>
        </div>
      </motion.aside>

      <div className="relative flex-1">
        <Map
          className="absolute inset-0"
          activeDistrict={slug !== 'all' ? slug : null}
          activeCategory={selectedCategory}
          onMarkerClick={locSlug => navigate({ to: '/locations/$slug', params: { slug: locSlug } })}
        />
      </div>
    </div>
  )
}
