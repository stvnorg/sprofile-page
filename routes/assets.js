const path = require('path')

async function routes (fastify, options) {
  fastify.get('/assets/*', function (request, reply) {
    var url = request.req.url.split('/')
    const fs = require('fs')
    const stream = fs.createReadStream(path.join(__dirname, 'assets/') + url.slice(2, url.length).join('/'))
    if (url.includes('fonts')) {
      reply.type('application/font-woff2').send(stream)
    } else if (url.includes('css')) {
      reply.type('text/css').send(stream)
    } else if (url.includes('js')) {
      reply.type('application/javascript').send(stream)
    } else {
      reply.type('application/json').send(stream)
    }
  })
}

module.exports = routes
