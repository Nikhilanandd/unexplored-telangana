import { useNavigate } from '@tanstack/react-router'
import { DISTRICTS } from '@ut/config'
import { Compass, Search, X } from 'lucide-react'
import { useState } from 'react'
import { useStore } from '../store'

export function Navbar() {
  const navigate = useNavigate()
  const searchQuery = useStore(s => s.searchQuery)
  const setSearchQuery = useStore(s => s.setSearchQuery)
  const [searchOpen, setSearchOpen] = useState(false)

  const filteredDistricts = searchQuery
    ? DISTRICTS.filter(
        d =>
          d.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          d.description.toLowerCase().includes(searchQuery.toLowerCase())
      ).slice(0, 6)
    : []

  return (
    <nav className="sticky top-0 z-50 border-b border-obsidian-800 bg-obsidian-950/80 backdrop-blur-xl">
      <div className="flex h-16 items-center gap-4 px-6">
        <button
          onClick={() => navigate({ to: '/' })}
          className="flex items-center gap-2 transition-opacity hover:opacity-80"
        >
          <Compass className="h-5 w-5 text-saffron-500" />
          <span className="font-serif text-lg font-semibold text-sand-100">
            Unexplored Telangana
          </span>
        </button>

        <div className="ml-auto flex items-center gap-2">
          {searchOpen ? (
            <div className="relative">
              <Search className="pointer-events-none absolute left-3 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-sand-500" />
              <input
                type="text"
                placeholder="Search..."
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                autoFocus
                className="h-9 w-64 rounded-lg border border-obsidian-600 bg-obsidian-800 pl-9 pr-8 text-sm text-sand-100 placeholder:text-sand-500 focus:border-saffron-500 focus:outline-none"
                onKeyDown={e => {
                  if (e.key === 'Escape') {
                    setSearchOpen(false)
                    setSearchQuery('')
                  }
                  if (e.key === 'Enter' && filteredDistricts[0]) {
                    navigate({
                      to: '/districts/$slug',
                      params: { slug: filteredDistricts[0].slug },
                    })
                    setSearchOpen(false)
                    setSearchQuery('')
                  }
                }}
              />
              <button
                onClick={() => {
                  setSearchOpen(false)
                  setSearchQuery('')
                }}
                className="absolute right-2 top-1/2 -translate-y-1/2 text-sand-500 hover:text-sand-300"
              >
                <X className="h-3.5 w-3.5" />
              </button>

              {filteredDistricts.length > 0 && (
                <div className="absolute right-0 top-full mt-1 w-72 rounded-xl border border-obsidian-600 bg-obsidian-800 py-1 shadow-2xl">
                  {filteredDistricts.map(d => (
                    <button
                      key={d.slug}
                      onClick={() => {
                        navigate({
                          to: '/districts/$slug',
                          params: { slug: d.slug },
                        })
                        setSearchOpen(false)
                        setSearchQuery('')
                      }}
                      className="flex w-full items-center gap-3 px-3 py-2 text-left text-sm text-sand-300 transition-colors hover:bg-obsidian-700 hover:text-sand-100"
                    >
                      <Compass className="h-3.5 w-3.5 text-saffron-500" />
                      {d.name}
                    </button>
                  ))}
                </div>
              )}
            </div>
          ) : (
            <button
              onClick={() => setSearchOpen(true)}
              className="rounded-lg p-2 text-sand-500 transition-colors hover:bg-obsidian-800 hover:text-sand-300"
            >
              <Search className="h-4 w-4" />
            </button>
          )}
        </div>
      </div>
    </nav>
  )
}
