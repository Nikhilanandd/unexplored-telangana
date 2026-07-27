import { createRootRoute, createRoute, lazyRouteComponent } from '@tanstack/react-router'
import { RootLayout } from './layouts/RootLayout'

const rootRoute = createRootRoute({
  component: RootLayout,
})

const landingRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  component: lazyRouteComponent(() => import('./pages/Landing')),
})

const exploreRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/explore',
  component: lazyRouteComponent(() => import('./pages/Explore')),
})

const districtRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/districts/$slug',
  component: lazyRouteComponent(() => import('./pages/DistrictExplorer')),
})

const locationRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/locations/$slug',
  component: lazyRouteComponent(() => import('./pages/Destination')),
})

const routeTree = rootRoute.addChildren([landingRoute, exploreRoute, districtRoute, locationRoute])

export { routeTree }
