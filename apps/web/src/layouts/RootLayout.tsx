import { Outlet } from '@tanstack/react-router'
import { Navbar } from '../components/Navbar'

export function RootLayout() {
  return (
    <div className="flex min-h-screen flex-col bg-white text-slate-900 transition-colors dark:bg-obsidian-950 dark:text-sand-200">
      <Navbar />
      <main className="flex-1">
        <Outlet />
      </main>
    </div>
  )
}
