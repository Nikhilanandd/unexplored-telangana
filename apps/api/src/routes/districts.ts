import createError from '@fastify/error'
import { DISTRICTS } from '@ut/config'
import type { FastifyInstance } from 'fastify'

const DistrictNotFoundError = createError('DISTRICT_NOT_FOUND', 'District "%s" not found', 404)

export async function districtRoutes(app: FastifyInstance) {
  app.get('/', {
    schema: {
      description: 'Get all districts of Telangana',
      tags: ['districts'],
      response: {
        200: {
          type: 'array',
          items: { type: 'object' },
        },
      },
    },
    handler: async () => {
      return DISTRICTS
    },
  })

  app.get('/:slug', {
    schema: {
      description: 'Get a district by its slug',
      tags: ['districts'],
      params: {
        type: 'object',
        properties: { slug: { type: 'string' } },
        required: ['slug'],
      },
    },
    handler: async request => {
      const { slug } = request.params as { slug: string }
      const district = DISTRICTS.find(d => d.slug === slug)
      if (!district) {
        throw new DistrictNotFoundError(slug)
      }
      return district
    },
  })
}
