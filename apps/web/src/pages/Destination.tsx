import { useNavigate, useParams } from '@tanstack/react-router'
import { Badge, Button, Card } from '@ut/ui'
import { ArrowLeft, Clock, ExternalLink, ImageIcon, MapPin, Navigation } from 'lucide-react'
import { motion } from 'motion/react'

export default function DestinationPage() {
  const { slug } = useParams({ from: '/locations/$slug' })
  const navigate = useNavigate()

  return (
    <div className="min-h-[calc(100vh-4rem)]">
      <div className="relative h-[50vh] overflow-hidden bg-obsidian-900">
        <div className="absolute inset-0 bg-gradient-to-b from-obsidian-950/30 via-transparent to-obsidian-950" />
        <div className="flex h-full items-center justify-center">
          <ImageIcon className="h-16 w-16 text-sand-800" />
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
              <Badge variant="saffron">Historic Site</Badge>
              <Badge variant="jade">Family Friendly</Badge>
            </div>

            <h1 className="font-serif text-5xl font-bold leading-tight text-sand-100">
              {slug
                .split('-')
                .map(w => w.charAt(0).toUpperCase() + w.slice(1))
                .join(' ')}
            </h1>

            <div className="mt-6 grid gap-6 sm:grid-cols-3">
              <div className="flex items-center gap-2 text-sm text-sand-400">
                <MapPin className="h-4 w-4 text-saffron-500" />
                Hyderabad District
              </div>
              <div className="flex items-center gap-2 text-sm text-sand-400">
                <Clock className="h-4 w-4 text-saffron-500" />
                October – March
              </div>
              <div className="flex items-center gap-2 text-sm text-sand-400">
                <Navigation className="h-4 w-4 text-saffron-500" />
                Easily accessible
              </div>
            </div>

            <div className="mt-10">
              <p className="text-lg leading-relaxed text-sand-300">
                This destination page is powered by MDX content from the Git CMS. Content is loaded
                from{' '}
                <code className="rounded bg-obsidian-800 px-1.5 py-0.5 font-mono text-sm text-saffron-400">
                  content/locations/{slug}.mdx
                </code>{' '}
                and rendered with rich typography, images, and editorial storytelling.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <Button variant="primary" size="lg">
                <Navigation className="h-4 w-4" />
                Get Directions (OSM)
              </Button>
              <Button variant="outline" size="lg">
                <ExternalLink className="h-4 w-4" />
                View on OpenStreetMap
              </Button>
            </div>
          </Card>
        </motion.div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          <Card>
            <h3 className="mb-4 font-serif text-xl font-semibold text-sand-200">
              History & Culture
            </h3>
            <p className="leading-relaxed text-sand-400">
              Detailed history and cultural significance loaded from the MDX content file. This
              section uses Git as a CMS.
            </p>
          </Card>

          <Card>
            <h3 className="mb-4 font-serif text-xl font-semibold text-sand-200">Travel Tips</h3>
            <ul className="space-y-3">
              {[
                'Best visited early morning for great light',
                'Carry water and wear comfortable shoes',
                'Local guides available at the entrance',
                'Parking available nearby',
              ].map((tip, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-sand-400">
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
              {[
                'Charminar (4.5 km)',
                'Golconda Fort (8 km)',
                'Hussain Sagar (6 km)',
                'Salar Jung Museum (5 km)',
              ].map((attraction, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-sand-400">
                  <MapPin className="mt-0.5 h-3.5 w-3.5 shrink-0 text-saffron-500" />
                  {attraction}
                </li>
              ))}
            </ul>
          </Card>

          <Card>
            <h3 className="mb-4 font-serif text-xl font-semibold text-sand-200">Accessibility</h3>
            <div className="space-y-3 text-sm text-sand-400">
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-jade-500" />
                  Wheelchair accessible paths
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-jade-500" />
                  Audio guides available
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-jade-500" />
                  Signage in multiple languages
                </li>
              </ul>
            </div>
          </Card>
        </div>
      </div>
    </div>
  )
}
