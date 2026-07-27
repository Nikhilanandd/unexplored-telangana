import cors from '@fastify/cors'
import swagger from '@fastify/swagger'
import swaggerUi from '@fastify/swagger-ui'
import Fastify from 'fastify'
import { districtRoutes } from './routes/districts'
import { geojsonRoutes } from './routes/geojson'
import { locationRoutes } from './routes/locations'

export async function createServer() {
  const app = Fastify({
    logger: {
      transport: {
        target: 'pino-pretty',
        options: { colorize: true },
      },
    },
  })

  await app.register(cors, {
    origin: true,
    credentials: true,
  })

  await app.register(swagger, {
    openapi: {
      info: {
        title: 'Unexplored Telangana API',
        description:
          'REST API for Telangana tourism — districts, locations, GeoJSON boundaries, and content.',
        version: '0.0.1',
      },
      servers: [{ url: 'http://localhost:4000', description: 'Development' }],
    },
  })

  await app.register(swaggerUi, {
    routePrefix: '/docs',
  })

  await app.register(districtRoutes, { prefix: '/api/districts' })
  await app.register(locationRoutes, { prefix: '/api/locations' })
  await app.register(geojsonRoutes, { prefix: '/api/geojson' })

  app.get('/api/health', async () => ({ status: 'ok', timestamp: Date.now() }))

  return app
}
