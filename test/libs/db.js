function Database (fastify) {
  this.fastify = fastify
}

Database.prototype.connectToDatabase = async function () {
  const client = await this.fastify.pg.connect()
  client.release()
}

Database.prototype.queryTable = async function (table) {
  const client = await this.fastify.pg.connect()
  client.query('SELECT * FROM ' + table)
  client.release()
}

module.exports = Database
