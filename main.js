const fastify = require('fastify')({ logger: true })

fastify.register(require('fastify-postgres'), {
  connectionString: process.env.DATABASE_URL
})

fastify.register(require('point-of-view'), {
  engine: {
    ejs: require('ejs')
  },
  templates: './routes/templates',
  includeViewExtension: true
})

fastify.register(require('./routes/index'))
fastify.register(require('./routes/assets'))

fastify.listen(3000, '0.0.0.0', function (err, address) {
  if (err) {
    fastify.log.error(err)
    process.exit(1)
  }
  fastify.log.info(`server listening on ${address}`)
})
