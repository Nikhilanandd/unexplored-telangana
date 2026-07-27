import { useNavigate } from '@tanstack/react-router'
import { DISTRICTS, LOCATIONS } from '@ut/config'
import { Button } from '@ut/ui'
import { ArrowRight, Castle, Compass, Droplets, MapPin, Mountain, Sparkles } from 'lucide-react'
import { motion } from 'motion/react'

const FEATURED = LOCATIONS.slice(0, 5)

const SEASONS = [
  {
    title: 'Monsoon Magic',
    subtitle: 'June – September',
    description:
      'Waterfalls roar to life, forests turn emerald, and the entire Deccan breathes fresh.',
    icon: Droplets,
    color: 'bg-blue-500/10 text-blue-500',
  },
  {
    title: 'Winter Heritage',
    subtitle: 'October – February',
    description:
      'Perfect weather to explore forts, temples, and archaeological sites across the state.',
    icon: Castle,
    color: 'bg-amber-500/10 text-amber-500',
  },
  {
    title: 'Summer Escapes',
    subtitle: 'March – May',
    description: 'Head to hill stations, dense forests, and reservoirs for a cool retreat.',
    icon: Mountain,
    color: 'bg-emerald-500/10 text-emerald-500',
  },
]

export default function Landing() {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen">
      <section className="relative overflow-hidden bg-gradient-to-b from-obsidian-950 via-obsidian-900 to-obsidian-950 px-6 pb-32 pt-24 dark:from-obsidian-950 dark:via-obsidian-900 dark:to-obsidian-950 from-slate-50 via-white to-slate-50">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(245,158,11,0.06)_0%,transparent_60%)]" />

        <div className="relative mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
          >
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-saffron-500">
              A Digital Atlas of Telangana
            </p>

            <h1 className="mt-8 font-serif text-5xl font-bold leading-tight tracking-tight text-slate-900 md:text-7xl dark:text-sand-100">
              Every district
              <br />
              <span className="text-saffron-500">has a story.</span>
            </h1>

            <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-slate-600 dark:text-sand-400">
              From the Kakatiya ruins of Warangal to the cascading waterfalls of Adilabad, from
              Hyderabad&#39;s 400-year-old bazaars to the prehistoric rock art of Pandavula Gutta —
              discover a Telangana that most travelers never see.
            </p>

            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <Button
                size="lg"
                onClick={() => navigate({ to: '/explore' })}
                className="shadow-lg shadow-saffron-500/20"
              >
                <Compass className="h-4 w-4" />
                Start Exploring
                <ArrowRight className="h-4 w-4" />
              </Button>
              <Button variant="secondary" size="lg" onClick={() => navigate({ to: '/explore' })}>
                <MapPin className="h-4 w-4" />
                Browse Districts
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="mt-20 text-left"
          >
            <p className="mb-6 font-mono text-xs uppercase tracking-[0.2em] text-saffron-500">
              Featured Destinations
            </p>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {FEATURED.map((loc, i) => (
                <motion.button
                  key={loc.slug}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 + i * 0.1 }}
                  onClick={() => navigate({ to: '/locations/$slug', params: { slug: loc.slug } })}
                  className="group rounded-2xl border border-slate-200 bg-white p-5 text-left shadow-sm transition-all hover:border-saffron-300 hover:shadow-md dark:border-obsidian-800 dark:bg-obsidian-900/50 dark:hover:border-saffron-700"
                >
                  <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-saffron-500/10 text-lg">
                    <Sparkles className="h-5 w-5 text-saffron-500" />
                  </div>
                  <h3 className="font-serif text-lg font-semibold text-slate-800 group-hover:text-saffron-600 dark:text-sand-200 dark:group-hover:text-saffron-400">
                    {loc.title}
                  </h3>
                  <p className="mt-2 line-clamp-2 text-xs leading-relaxed text-slate-500 dark:text-sand-400">
                    {loc.description}
                  </p>
                  <div className="mt-3 flex items-center gap-2">
                    <span className="rounded-full bg-saffron-500/10 px-2.5 py-0.5 text-[10px] font-medium text-saffron-500">
                      {loc.category.replace(/-/g, ' ')}
                    </span>
                    <span className="text-[10px] text-slate-400 dark:text-sand-500">
                      {DISTRICTS.find(d => d.slug === loc.district)?.name ?? loc.district}
                    </span>
                  </div>
                </motion.button>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="bg-slate-100/50 px-6 py-24 dark:bg-obsidian-900/50">
        <div className="mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-saffron-500">
              Seasonal Highlights
            </p>
            <h2 className="mt-4 font-serif text-3xl font-bold text-slate-900 md:text-4xl dark:text-sand-100">
              Telangana through the year
            </h2>
          </motion.div>

          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {SEASONS.map((season, i) => (
              <motion.div
                key={season.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.5 }}
                className="rounded-2xl border border-slate-200 bg-white p-6 text-left transition-all hover:shadow-md dark:border-obsidian-800 dark:bg-obsidian-900/50"
              >
                <div className={`mb-4 inline-flex rounded-xl p-3 ${season.color}`}>
                  <season.icon className="h-5 w-5" />
                </div>
                <h3 className="font-serif text-lg font-semibold text-slate-800 dark:text-sand-200">
                  {season.title}
                </h3>
                <p className="mt-1 text-xs font-medium text-slate-400 dark:text-sand-500">
                  {season.subtitle}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-slate-500 dark:text-sand-400">
                  {season.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-24">
        <div className="mx-auto max-w-2xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-saffron-500">
              Your journey begins
            </p>
            <h2 className="mt-4 font-serif text-3xl font-bold text-slate-900 md:text-4xl dark:text-sand-100">
              Ready to explore?
            </h2>
            <p className="mt-4 text-slate-600 dark:text-sand-400">
              42 hand-picked destinations · 33 districts · 13 categories
            </p>
            <div className="mt-8">
              <Button size="lg" onClick={() => navigate({ to: '/explore' })}>
                <Compass className="h-4 w-4" />
                Open the Map
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
