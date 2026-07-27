import createError from '@fastify/error'
import type { Category } from '@ut/types'
import type { FastifyInstance } from 'fastify'

const LocationNotFoundError = createError(
  'LOCATION_NOT_FOUND',
  'Location "%s" not yet in content pipeline',
  404
)

const categories: Category[] = [
  'waterfalls',
  'forts',
  'temples',
  'lakes',
  'reservoirs',
  'archaeological',
  'eco-tourism',
  'food',
  'viewpoints',
  'wildlife',
  'camping',
  'museums',
  'hidden-gems',
]

export async function locationRoutes(app: FastifyInstance) {
  app.get('/', {
    schema: {
      description: 'Get locations with optional filters',
      tags: ['locations'],
      querystring: {
        type: 'object',
        properties: {
          district: { type: 'string' },
          category: { type: 'string', enum: categories },
          limit: { type: 'number', default: 50 },
          offset: { type: 'number', default: 0 },
        },
      },
    },
    handler: async request => {
      const query = request.query as {
        district?: string
        category?: Category
        limit?: number
        offset?: number
      }
      return {
        locations: [],
        total: 0,
        district: query.district ?? null,
        category: query.category ?? null,
        limit: query.limit ?? 50,
        offset: query.offset ?? 0,
      }
    },
  })

  app.get('/:slug', {
    schema: {
      description: 'Get a single location by slug',
      tags: ['locations'],
      params: {
        type: 'object',
        properties: { slug: { type: 'string' } },
        required: ['slug'],
      },
    },
    handler: async request => {
      const { slug } = request.params as { slug: string }
      throw new LocationNotFoundError(slug)
    },
  })
}
