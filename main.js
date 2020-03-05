const fastify = require('fastify')({ logger: true })
const path = require('path')

fastify.register(require('fastify-postgres'), {
  connectionString: process.env.DATABASE_ENDPOINT
})

fastify.register(require('point-of-view'), {
  engine: {
    ejs: require('ejs')
  },
  templates: path.join(__dirname, 'routes/templates'),
  includeViewExtension: true
})

fastify.register(require(path.join(__dirname, 'routes/index')))
fastify.register(require(path.join(__dirname, 'routes/assets')))

fastify.listen(3000, '0.0.0.0', function (err, address) {
  if (err) {
    fastify.log.error(err)
    process.exit(1)
  }
})
