import { createServer } from './app'

const start = async () => {
  const app = await createServer()

  try {
    await app.listen({ port: 4000, host: '0.0.0.0' })
    app.log.info({ port: 4000 }, 'API server running')
  } catch (err) {
    app.log.error(err)
    process.exit(1)
  }
}

start()
