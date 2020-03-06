module.exports = {
  development: {
    username: process.env.DEV_DATABASE_USERNAME,
    password: process.env.DEV_DATABASE_PASSWORD,
    database: process.env.DEV_DATABASE_NAME,
    host: process.env.DEV_DATABASE_URL,
    port: process.env.DEV_DATABASE_PORT,
    dialect: 'postgres',
    dialectOptions: {
      bigNumberStrings: true
    }
  },
  test: {
    username: process.env.CI_DATABASE_USERNAME,
    password: process.env.CI_DATABASE_PASSWORD,
    database: process.env.CI_DATABASE_NAME,
    host: process.env.CI_DATABASE_URL,
    port: process.env.CI_DATABASE_PORT,
    dialect: 'postgres',
    dialectOptions: {
      bigNumberStrings: true
    }
  },
  production: {
    username: process.env.DATABASE_USERNAME,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_NAME,
    host: process.env.DATABASE_URL,
    port: process.env.DATABASE_PORT,
    dialect: 'postgres',
    dialectOptions: {
      bigNumberStrings: true
    }
  }
}
