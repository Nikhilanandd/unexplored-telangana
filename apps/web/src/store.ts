import type { Category, MapLayer } from '@ut/types'
import { create } from 'zustand'
import { subscribeWithSelector } from 'zustand/middleware'

interface MapStore {
  activeDistrict: string | null
  activeCategory: Category | null
  activeLayer: MapLayer
  searchQuery: string
  sidebarOpen: boolean

  setActiveDistrict: (district: string | null) => void
  setActiveCategory: (category: Category | null) => void
  setActiveLayer: (layer: MapLayer) => void
  setSearchQuery: (query: string) => void
  toggleSidebar: () => void
  setSidebarOpen: (open: boolean) => void
}

export const useStore = create<MapStore>()(
  subscribeWithSelector(set => ({
    activeDistrict: null,
    activeCategory: null,
    activeLayer: 'all',
    searchQuery: '',
    sidebarOpen: false,

    setActiveDistrict: district => set({ activeDistrict: district, sidebarOpen: false }),

    setActiveCategory: category => set({ activeCategory: category }),

    setActiveLayer: layer => set({ activeLayer: layer }),

    setSearchQuery: query => set({ searchQuery: query }),

    toggleSidebar: () => set(state => ({ sidebarOpen: !state.sidebarOpen })),

    setSidebarOpen: open => set({ sidebarOpen: open }),
  }))
)
