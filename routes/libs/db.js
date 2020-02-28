function Database (fastify) {
  this.fastify = fastify
}

Database.prototype.getProfileData = async function () {
  const client = await this.fastify.pg.connect()
  const { rows } = await client.query(
    'SELECT page_title, image_path, name, summary, links_icons, about_me FROM profile WHERE id=1'
  )
  client.release()
  return rows[0]
}

Database.prototype.getResumeData = async function () {
  const client = await this.fastify.pg.connect()
  const { rows } = await client.query(
    'SELECT job_title, company, period, location, achievements FROM resume ORDER BY id DESC'
  )
  client.release()
  return rows
}

module.exports = Database
