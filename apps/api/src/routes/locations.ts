import createError from '@fastify/error'
import { DISTRICTS, LOCATIONS } from '@ut/config'
import type { Category } from '@ut/types'
import type { FastifyInstance } from 'fastify'

const LocationNotFoundError = createError('LOCATION_NOT_FOUND', 'Location "%s" not found', 404)

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
      let filtered = [...LOCATIONS]

      if (query.district) {
        filtered = filtered.filter(l => l.district === query.district)
      }
      if (query.category) {
        filtered = filtered.filter(l => l.category === query.category)
      }

      const total = filtered.length
      const offset = query.offset ?? 0
      const limit = query.limit ?? 50
      const paged = filtered.slice(offset, offset + limit)

      return {
        locations: paged,
        total,
        district: query.district ?? null,
        category: query.category ?? null,
        limit,
        offset,
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
      const location = LOCATIONS.find(l => l.slug === slug)
      if (!location) {
        throw new LocationNotFoundError(slug)
      }
      const district = DISTRICTS.find(d => d.slug === location.district)
      return { ...location, districtName: district?.name ?? location.district }
    },
  })
}
