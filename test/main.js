const Fastify = require('fastify')
const path = require('path')
const fs = require('fs')
const Database = require(path.join(__dirname, 'libs/db'))

function buildFastify () {
  const fastify = Fastify()
  var DBConn = new Database(fastify)

  fastify.register(require('fastify-postgres'), {
    connectionString: process.env.DATABASE_URL
  })

  fastify.get('/connect-to-db', async (request, reply) => {
    await DBConn.connectToDatabase()
    return 0
  })

  fastify.get('/query-some-data', async (request, reply) => {
    await DBConn.querySomeData()
    return 0
  })

  fastify.get('/error-404', (request, reply) => {
    reply
      .code(404)
      .header('Content-Type', 'text/html; charset=utf-8')
      .send('<p>Error 404, Page not found</p>')
  })

  fastify.get('/assets/style.css', (request, reply) => {
    const stream = fs.createReadStream('./test/assets/style.css', 'utf8')
    reply
      .code(200)
      .header('Content-Type', 'text/css; charset=utf-8')
      .send(stream)
  })

  fastify.get('/', (request, reply) => {
    reply
      .code(200)
      .header('Content-Type', 'text/html; charset=utf-8')
      .send('<html><body><div><p>Index Page</p></div></body></html>')
  })
  return fastify
}

module.exports = buildFastify
