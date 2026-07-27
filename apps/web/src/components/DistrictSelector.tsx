import { DISTRICTS, getDistrictLocationCount } from '@ut/config'
import { MapPin, Search, X } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'

interface DistrictSelectorProps {
  selectedDistrict: string | null
  onSelect: (slug: string | null) => void
}

export function DistrictSelector({ selectedDistrict, onSelect }: DistrictSelectorProps) {
  const [open, setOpen] = useState(false)
  const [query, setQuery] = useState('')
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (open) inputRef.current?.focus()
  }, [open])

  const selected = DISTRICTS.find(d => d.slug === selectedDistrict)

  const filtered = query
    ? DISTRICTS.filter(
        d =>
          d.name.toLowerCase().includes(query.toLowerCase()) ||
          d.description.toLowerCase().includes(query.toLowerCase())
      )
    : DISTRICTS

  const handleSelect = (slug: string) => {
    onSelect(slug === selectedDistrict ? null : slug)
    setOpen(false)
    setQuery('')
  }

  const handleClear = () => {
    onSelect(null)
    setOpen(false)
    setQuery('')
  }

  return (
    <div className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-left text-sm text-slate-700 shadow-sm transition-all hover:border-slate-300 dark:border-obsidian-700 dark:bg-obsidian-800 dark:text-sand-200 dark:hover:border-obsidian-600"
      >
        <MapPin className="h-4 w-4 shrink-0 text-saffron-500" />
        <span className="flex-1 truncate">{selected ? selected.name : 'All Districts'}</span>
        {selected && (
          <span className="shrink-0 rounded-full bg-saffron-500/10 px-2 py-0.5 text-[10px] font-medium text-saffron-400">
            {getDistrictLocationCount(selected.slug)} places
          </span>
        )}
      </button>

      {open && (
        <>
          <div className="fixed inset-0 z-40" onClick={() => setOpen(false)} />
          <div className="absolute left-0 top-full z-50 mt-2 w-full min-w-[280px] overflow-hidden rounded-xl border border-slate-200 bg-white shadow-xl dark:border-obsidian-700 dark:bg-obsidian-800">
            <div className="flex items-center border-b border-slate-100 px-3 py-2 dark:border-obsidian-700">
              <Search className="mr-2 h-3.5 w-3.5 shrink-0 text-slate-400 dark:text-sand-500" />
              <input
                ref={inputRef}
                value={query}
                onChange={e => setQuery(e.target.value)}
                placeholder="Search districts..."
                className="flex-1 bg-transparent text-sm text-slate-700 outline-none placeholder:text-slate-400 dark:text-sand-200 dark:placeholder:text-sand-500"
              />
              {query && (
                <button
                  onClick={() => setQuery('')}
                  className="shrink-0 text-slate-400 hover:text-slate-600 dark:text-sand-500 dark:hover:text-sand-300"
                >
                  <X className="h-3.5 w-3.5" />
                </button>
              )}
            </div>

            <div className="max-h-64 overflow-y-auto">
              <button
                onClick={handleClear}
                className="flex w-full items-center gap-2 px-3 py-2 text-sm text-saffron-500 transition-colors hover:bg-saffron-500/5 dark:hover:bg-saffron-500/10"
              >
                <MapPin className="h-3.5 w-3.5 shrink-0" />
                All Districts
              </button>
              {filtered.map(d => (
                <button
                  key={d.slug}
                  onClick={() => handleSelect(d.slug)}
                  className={`flex w-full items-center gap-2 px-3 py-2 text-sm transition-colors hover:bg-slate-50 dark:hover:bg-obsidian-700 ${
                    selectedDistrict === d.slug
                      ? 'bg-saffron-500/5 text-saffron-600 dark:bg-saffron-500/10 dark:text-saffron-400'
                      : 'text-slate-600 dark:text-sand-300'
                  }`}
                >
                  <MapPin className="h-3.5 w-3.5 shrink-0 text-saffron-500" />
                  <span className="flex-1 truncate">{d.name}</span>
                  <span className="shrink-0 text-[10px] text-slate-400 dark:text-sand-500">
                    {getDistrictLocationCount(d.slug)}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  )
}
