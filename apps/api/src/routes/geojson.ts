import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import createError from '@fastify/error'
import type { FastifyInstance } from 'fastify'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const BoundaryNotFoundError = createError(
  'BOUNDARY_NOT_FOUND',
  'Boundary for "%s" not yet loaded',
  404
)

export async function geojsonRoutes(app: FastifyInstance) {
  app.get('/districts', {
    schema: {
      description: 'Get GeoJSON boundaries for all districts',
      tags: ['geojson'],
    },
    handler: async () => {
      const geojsonDir = path.resolve(__dirname, '../../../../geojson/districts')

      try {
        const files = fs.readdirSync(geojsonDir).filter(f => f.endsWith('.json'))
        const features: unknown[] = []

        for (const file of files) {
          const content = fs.readFileSync(path.join(geojsonDir, file), 'utf-8')
          features.push(JSON.parse(content))
        }

        return {
          type: 'FeatureCollection',
          features,
        }
      } catch {
        return {
          type: 'FeatureCollection',
          features: [],
          note: 'GeoJSON district boundaries not yet loaded. Add .json files to geojson/districts/',
        }
      }
    },
  })

  app.get('/districts/:slug', {
    schema: {
      description: 'Get GeoJSON boundary for a specific district',
      tags: ['geojson'],
      params: {
        type: 'object',
        properties: { slug: { type: 'string' } },
        required: ['slug'],
      },
    },
    handler: async request => {
      const { slug } = request.params as { slug: string }
      throw new BoundaryNotFoundError(slug)
    },
  })
}
