const tap = require('tap')
const supertest = require('supertest')
const buildFastify = require('./main')
const fastify = buildFastify()

tap.test('GET `/connect-to-db`', async (t) => {
  await fastify.ready()
  await supertest(fastify.server).get('/connect-to-db').expect(200)
})

tap.test('GET `/query-some-data`', async (t) => {
  await supertest(fastify.server).get('/query-some-data').expect(200)
})

tap.test('GET `/error-404` route', t => {
  t.plan(4)

  fastify.inject({
    method: 'GET',
    url: '/error-404'
  }, (err, response) => {
    t.error(err)
    t.strictEqual(response.statusCode, 404)
    t.strictEqual(response.headers['content-type'], 'text/html; charset=utf-8')
    t.deepEqual(response.body, '<p>Error 404, Page not found</p>')
  })
})

tap.test('GET `/assets/style.css` route', t => {
  t.plan(4)

  fastify.inject({
    method: 'GET',
    url: '/assets/style.css'
  }, (err, response) => {
    t.error(err)
    t.strictEqual(response.statusCode, 200)
    t.strictEqual(response.headers['content-type'], 'text/css; charset=utf-8')
    t.deepEqual(response.body, '* { margin: 0; padding: 0; }\n')
  })
})

tap.test('GET `/` route', t => {
  t.plan(4)

  fastify.inject({
    method: 'GET',
    url: '/'
  }, (err, response) => {
    t.error(err)
    t.strictEqual(response.statusCode, 200)
    t.strictEqual(response.headers['content-type'], 'text/html; charset=utf-8')
    t.deepEqual(response.body, '<html><body><div><p>Index Page</p></div></body></html>')
  })

  t.tearDown(() => fastify.close())
})
