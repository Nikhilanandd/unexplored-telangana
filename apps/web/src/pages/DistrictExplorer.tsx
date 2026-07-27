import { useNavigate, useParams } from '@tanstack/react-router'
import { DISTRICTS } from '@ut/config'
import { Badge, Button, Card } from '@ut/ui'
import {
  ArrowLeft,
  ChevronLeft,
  ChevronRight,
  Clock,
  Layers,
  MapPin,
  Navigation,
  Sparkles,
} from 'lucide-react'
import { motion } from 'motion/react'
import { useState } from 'react'
import { Map } from '../components/Map'
import { useStore } from '../store'

export default function DistrictExplorer() {
  const { slug } = useParams({ from: '/districts/$slug' })
  const navigate = useNavigate()
  const setActiveDistrict = useStore(s => s.setActiveDistrict)
  const [activeTab, setActiveTab] = useState<'info' | 'locations'>('info')

  const district = DISTRICTS.find(d => d.slug === slug)
  const districtIndex = DISTRICTS.findIndex(d => d.slug === slug)

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

  const handleBack = () => {
    setActiveDistrict(null)
    navigate({ to: '/' })
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
              onClick={handleBack}
              className="flex items-center gap-2 text-sm text-sand-400 transition-colors hover:text-sand-200"
            >
              <ArrowLeft className="h-4 w-4" />
              All Districts
            </button>

            <div className="flex gap-1">
              {prevDistrict && (
                <button
                  onClick={() =>
                    navigate({
                      to: '/districts/$slug',
                      params: { slug: prevDistrict.slug },
                    })
                  }
                  className="rounded-lg p-1.5 text-sand-500 transition-colors hover:bg-obsidian-800 hover:text-sand-300"
                >
                  <ChevronLeft className="h-4 w-4" />
                </button>
              )}
              {nextDistrict && (
                <button
                  onClick={() =>
                    navigate({
                      to: '/districts/$slug',
                      params: { slug: nextDistrict.slug },
                    })
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
              className="font-serif text-4xl font-bold leading-tight text-sand-100"
            >
              {district.name}
            </motion.h1>

            <p className="mt-4 text-base leading-relaxed text-sand-400">{district.description}</p>
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
                {tab === 'info' ? 'Overview' : 'Locations'}
              </button>
            ))}
          </div>

          {activeTab === 'info' && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-6">
              <div className="grid grid-cols-2 gap-3">
                <Card className="p-4">
                  <div className="flex items-center gap-2 text-sand-400">
                    <MapPin className="h-4 w-4" />
                    <p className="text-xs font-medium uppercase tracking-wide">Locations</p>
                  </div>
                  <p className="mt-2 font-serif text-2xl font-semibold text-sand-100">
                    {district.locationCount}
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
            </motion.div>
          )}

          {activeTab === 'locations' && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-4">
              <div className="rounded-xl border border-obsidian-700 bg-obsidian-800/30 p-6 text-center">
                <Layers className="mx-auto mb-3 h-8 w-8 text-sand-600" />
                <p className="text-sm text-sand-400">
                  Location data is loaded from the content pipeline.
                  <br />
                  Explore on the map or browse by category.
                </p>
              </div>
            </motion.div>
          )}
        </div>

        <div className="relative border-t border-obsidian-800 bg-obsidian-900/50 px-6 py-4">
          <div className="flex items-center gap-3">
            <Clock className="h-4 w-4 text-saffron-500" />
            <p className="text-xs text-sand-500">Best time to visit: October – March</p>
          </div>
          <div className="mt-2 flex items-center gap-3">
            <Navigation className="h-4 w-4 text-saffron-500" />
            <p className="text-xs text-sand-500">
              Coordinates: {district.center.lat.toFixed(3)}, {district.center.lng.toFixed(3)}
            </p>
          </div>
        </div>
      </motion.aside>

      <div className="relative flex-1">
        <Map
          className="absolute inset-0"
          onDistrictClick={slug => navigate({ to: '/districts/$slug', params: { slug } })}
        />
      </div>
    </div>
  )
}
