import { useNavigate, useParams } from '@tanstack/react-router'
import { DISTRICTS, LOCATIONS } from '@ut/config'
import { Badge, Button, Card } from '@ut/ui'
import { ArrowLeft, Clock, ExternalLink, MapPin, Navigation } from 'lucide-react'
import { motion } from 'motion/react'

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

export default function DestinationPage() {
  const { slug } = useParams({ from: '/locations/$slug' })
  const navigate = useNavigate()

  const location = LOCATIONS.find(l => l.slug === slug)
  const district = location ? DISTRICTS.find(d => d.slug === location.district) : null

  if (!location) {
    return (
      <div className="flex min-h-[calc(100vh-4rem)] items-center justify-center">
        <div className="text-center">
          <p className="text-2xl text-sand-400">Location not found</p>
          <Button className="mt-4" onClick={() => navigate({ to: '/' })}>
            Go back
          </Button>
        </div>
      </div>
    )
  }

  const emoji = CATEGORY_EMOJI[location.category] ?? '📍'
  const openOsmDirections = () => {
    const { lat, lng } = location.coordinates
    window.open(
      `https://www.openstreetmap.org/directions?to=${lat}%2C${lng}#map=14/${lat}/${lng}`,
      '_blank'
    )
  }
  const openOsmPlace = () => {
    const { lat, lng } = location.coordinates
    window.open(
      `https://www.openstreetmap.org/?mlat=${lat}&mlon=${lng}#map=15/${lat}/${lng}`,
      '_blank'
    )
  }
  const openGoogleMaps = () => {
    const { lat, lng } = location.coordinates
    const label = encodeURIComponent(location.title)
    window.open(
      `https://www.google.com/maps/dir/?api=1&destination=${lat},${lng}&destination_place_id=${label}`,
      '_blank'
    )
  }

  return (
    <div className="min-h-[calc(100vh-4rem)]">
      <div className="relative h-[50vh] overflow-hidden bg-obsidian-900">
        <div className="absolute inset-0 bg-gradient-to-b from-obsidian-950/30 via-transparent to-obsidian-950" />
        <div className="flex h-full items-center justify-center">
          <div className="text-center">
            <span className="text-6xl">{emoji}</span>
            <p className="mt-2 text-sm text-sand-600 font-mono">
              {location.coordinates.lat.toFixed(4)}, {location.coordinates.lng.toFixed(4)}
            </p>
          </div>
        </div>
      </div>

      <div className="mx-auto -mt-32 max-w-4xl px-6 pb-24">
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          onClick={() => navigate({ to: '/' })}
          className="mb-6 flex items-center gap-2 text-sm text-sand-400 transition-colors hover:text-sand-200"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to map
        </motion.button>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <Card variant="elevated" size="lg" className="relative overflow-hidden">
            <div className="mb-6 flex flex-wrap items-center gap-3">
              <Badge variant="saffron">
                {CATEGORY_EMOJI[location.category]} {location.category.replace(/-/g, ' ')}
              </Badge>
              <Badge variant="jade">{district?.name ?? location.district}</Badge>
            </div>

            <h1 className="font-serif text-4xl font-bold leading-tight text-sand-100 md:text-5xl">
              {location.title}
            </h1>

            <div className="mt-6 grid gap-4 sm:grid-cols-3">
              <div className="flex items-center gap-2 text-sm text-sand-400">
                <MapPin className="h-4 w-4 text-saffron-500 shrink-0" />
                {district?.name ?? location.district} District
              </div>
              <div className="flex items-center gap-2 text-sm text-sand-400">
                <Clock className="h-4 w-4 text-saffron-500 shrink-0" />
                {location.bestSeason}
              </div>
              <div className="flex items-center gap-2 text-sm text-sand-400">
                <Navigation className="h-4 w-4 text-saffron-500 shrink-0" />
                {location.accessibility.length > 60
                  ? `${location.accessibility.slice(0, 60)}...`
                  : location.accessibility}
              </div>
            </div>

            <div className="mt-8 border-t border-obsidian-700 pt-6">
              <p className="text-lg leading-relaxed text-sand-300">{location.description}</p>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <Button variant="primary" size="lg" onClick={openOsmDirections}>
                <Navigation className="h-4 w-4" />
                Get Directions
              </Button>
              <Button variant="outline" size="lg" onClick={openOsmPlace}>
                <ExternalLink className="h-4 w-4" />
                View on OpenStreetMap
              </Button>
              <Button variant="secondary" size="lg" onClick={openGoogleMaps}>
                <MapPin className="h-4 w-4" />
                Open in Google Maps
              </Button>
            </div>
          </Card>
        </motion.div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          <Card>
            <h3 className="mb-4 font-serif text-xl font-semibold text-sand-200">Travel Tips</h3>
            <ul className="space-y-3">
              {location.travelTips.map(tip => (
                <li key={tip} className="flex items-start gap-2 text-sm text-sand-400">
                  <span className="mt-1 block h-1.5 w-1.5 shrink-0 rounded-full bg-saffron-500" />
                  {tip}
                </li>
              ))}
            </ul>
          </Card>

          <Card>
            <h3 className="mb-4 font-serif text-xl font-semibold text-sand-200">
              Nearby Attractions
            </h3>
            <ul className="space-y-3">
              {location.nearbyAttractions.map(a => (
                <li key={a} className="flex items-start gap-2 text-sm text-sand-400">
                  <MapPin className="mt-0.5 h-3.5 w-3.5 shrink-0 text-saffron-500" />
                  {a}
                </li>
              ))}
            </ul>
          </Card>

          <Card className="md:col-span-2">
            <h3 className="mb-4 font-serif text-xl font-semibold text-sand-200">Accessibility</h3>
            <p className="text-sm leading-relaxed text-sand-400">{location.accessibility}</p>
          </Card>

          <Card className="md:col-span-2">
            <h3 className="mb-4 font-serif text-xl font-semibold text-sand-200">
              Explore More in {district?.name ?? location.district}
            </h3>
            <Button
              variant="outline"
              onClick={() =>
                navigate({
                  to: '/districts/$slug',
                  params: { slug: location.district },
                })
              }
            >
              <MapPin className="h-4 w-4" />
              View all places in {district?.name ?? location.district}
            </Button>
          </Card>
        </div>
      </div>
    </div>
  )
}
