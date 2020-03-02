const path = require('path')
const Database = require(path.join(__dirname, 'libs/db'))
const Parser = require(path.join(__dirname, 'libs/parser'))

var parser = new Parser()

async function routes (fastify, options) {
  var DBConn = new Database(fastify)

  fastify.setNotFoundHandler({}, (request, reply) => {
    reply
      .code(404)
      .view('page-not-found', {
        title: 'Error 404, Page not found'
      })
  })

  fastify.get('/', async (request, reply) => {
    var profile = await DBConn.getProfileData()
    var resume = await DBConn.getResumeData()
    reply.view('index', {
      title: profile.page_title,
      image_path: profile.image_path,
      name: profile.name,
      summary: profile.summary,
      links_icons: parser.getLinksAndIcons(profile.links_icons),
      about_me: profile.about_me,
      resume: resume
    })
    return reply
  })
}

module.exports = routes
