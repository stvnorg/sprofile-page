const tap = require('tap')
const buildFastify = require('./main')
const fastify = buildFastify()

tap.test('GET `/` route', t => {
  t.plan(4)

  fastify.inject({
    method: 'GET',
    url: '/'
  }, (err, response) => {
    t.error(err)
    t.strictEqual(response.statusCode, 200)
    t.strictEqual(response.headers['content-type'], 'application/json; charset=utf-8')
    t.deepEqual(response.json(), { hello: 'world' })
  })
})

tap.test('GET `/assets/style.css` route', t => {
  t.plan(3)

  fastify.inject({
    method: 'GET',
    url: '/assets/style.css'
  }, (err, response) => {
    t.error(err)
    t.strictEqual(response.statusCode, 200)
    t.strictEqual(response.headers['content-type'], 'text/css; charset=utf-8')
  })

  t.tearDown(() => fastify.close())
})
