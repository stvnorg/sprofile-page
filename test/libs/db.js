function Database (fastify) {
  this.fastify = fastify
}

Database.prototype.connectToDatabase = async function () {
  const client = await this.fastify.pg.connect()
  client.release()
  return 0
}

Database.prototype.querySomeData = async function () {
  const client = await this.fastify.pg.connect()
  const { row } = client.query(
    'SELECT * FROM profile'
  )
  client.release()
  return row
}

module.exports = Database
