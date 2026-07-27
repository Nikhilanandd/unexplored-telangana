import type { Category, MapLayer } from '@ut/types'
import { create } from 'zustand'

interface MapStore {
  activeDistrict: string | null
  activeCategory: Category | null
  activeLayer: MapLayer
  sidebarOpen: boolean

  setActiveDistrict: (district: string | null) => void
  setActiveCategory: (category: Category | null) => void
  setActiveLayer: (layer: MapLayer) => void
  toggleSidebar: () => void
}

export const useStore = create<MapStore>()(set => ({
  activeDistrict: null,
  activeCategory: null,
  activeLayer: 'all',
  sidebarOpen: false,

  setActiveDistrict: district => set({ activeDistrict: district, sidebarOpen: false }),

  setActiveCategory: category => set({ activeCategory: category }),

  setActiveLayer: layer => set({ activeLayer: layer }),

  toggleSidebar: () => set(state => ({ sidebarOpen: !state.sidebarOpen })),
}))
