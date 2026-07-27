import { Outlet } from '@tanstack/react-router'
import { Navbar } from '../components/Navbar'

export function RootLayout() {
  return (
    <div className="flex min-h-screen flex-col bg-obsidian-950">
      <Navbar />
      <main className="flex-1">
        <Outlet />
      </main>
    </div>
  )
}
