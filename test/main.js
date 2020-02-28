const Fastify = require('fastify')
const fs = require('fs')

function buildFastify () {
  const fastify = Fastify()

  fastify.get('/', function (request, reply) {
    reply.send({ hello: 'world' })
  })

  fastify.get('/assets/style.css', function (request, reply) {
    const stream = fs.createReadStream('./test/assets/style.css', 'utf8')
    reply
      .code(200)
      .header('Content-Type', 'text/css; charset=utf-8')
      .send(stream)
  })

  return fastify
}

module.exports = buildFastify
