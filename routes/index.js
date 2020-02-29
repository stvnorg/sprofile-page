const DB = require('./libs/db')
const Parser = require('./libs/parser')
const Path = require('./libs/path')

var parser = new Parser()
var path = new Path()

async function routes (fastify, options) {
  var DBConn = new DB(fastify)

  fastify.setNotFoundHandler({}, function (request, reply) {
    reply.send('Page Not Found!')
  })
  
  fastify.get('/', async (request, reply) => {
    var profile = await DBConn.getProfileData()
    var resume = await DBConn.getResumeData()
    reply.view(path.getIndexPageTemplatePath(), {
      title: profile.page_title,
      image_path: profile.image_path,
      name: profile.name,
      summary: profile.summary,
      links_icons: parser.getLinksAndIcons(profile.links_icons),
      about_me: profile.about_me,
      resume: resume
    })
    return (reply.code(204))
  })
}

module.exports = routes
