import { create } from 'zustand'
import { persist } from 'zustand/middleware'

type Theme = 'light' | 'dark'

interface ThemeStore {
  theme: Theme
  setTheme: (theme: Theme) => void
  toggle: () => void
}

export const useTheme = create<ThemeStore>()(
  persist(
    set => ({
      theme: 'dark',
      setTheme: theme => {
        set({ theme })
        applyTheme(theme)
      },
      toggle: () =>
        set(s => {
          const next = s.theme === 'dark' ? 'light' : 'dark'
          applyTheme(next)
          return { theme: next }
        }),
    }),
    { name: 'ut-theme' }
  )
)

function applyTheme(theme: Theme) {
  document.documentElement.setAttribute('data-theme', theme)
  if (theme === 'dark') {
    document.documentElement.classList.add('dark')
  } else {
    document.documentElement.classList.remove('dark')
  }
}

if (typeof window !== 'undefined') {
  const stored = localStorage.getItem('ut-theme')
  if (stored) {
    try {
      const parsed = JSON.parse(stored)
      applyTheme(parsed.state?.theme ?? 'dark')
    } catch {
      applyTheme('dark')
    }
  } else if (window.matchMedia('(prefers-color-scheme: light)').matches) {
    applyTheme('light')
  } else {
    applyTheme('dark')
  }
}
