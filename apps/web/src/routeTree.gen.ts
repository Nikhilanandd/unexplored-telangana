import { createRootRoute, createRoute, lazyRouteComponent } from '@tanstack/react-router'
import { RootLayout } from './layouts/RootLayout'

const rootRoute = createRootRoute({
  component: RootLayout,
})

const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  component: lazyRouteComponent(() => import('./pages/Landing')),
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

const routeTree = rootRoute.addChildren([indexRoute, districtRoute, locationRoute])

export { routeTree }
