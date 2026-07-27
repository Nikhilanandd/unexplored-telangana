import { useNavigate } from '@tanstack/react-router'
import { Compass, MapPin } from 'lucide-react'
import { ThemeToggle } from '../components/ThemeToggle'

export function Navbar() {
  const navigate = useNavigate()

  return (
    <nav className="sticky top-0 z-50 border-b border-slate-200 bg-white/80 backdrop-blur-xl dark:border-obsidian-800 dark:bg-obsidian-950/80">
      <div className="flex h-14 items-center gap-3 px-5">
        <button
          onClick={() => navigate({ to: '/' })}
          className="flex items-center gap-2 transition-opacity hover:opacity-80"
        >
          <Compass className="h-5 w-5 text-saffron-500" />
          <span className="font-serif text-base font-semibold text-slate-900 dark:text-sand-100">
            Unexplored Telangana
          </span>
        </button>

        <div className="ml-auto flex items-center gap-1">
          <button
            onClick={() => navigate({ to: '/explore' })}
            className="flex items-center gap-1.5 rounded-lg px-3 py-2 text-sm font-medium text-slate-600 transition-colors hover:bg-slate-100 dark:text-sand-300 dark:hover:bg-obsidian-800"
          >
            <MapPin className="h-3.5 w-3.5" />
            Explore
          </button>
          <ThemeToggle />
        </div>
      </div>
    </nav>
  )
}
