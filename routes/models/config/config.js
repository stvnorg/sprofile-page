module.exports = {
  development: {
    username: process.env.DEV_DATABASE_USERNAME,
    password: process.env.DEV_DATABASE_PASSWORD,
    database: process.env.DEV_DATABASE_NAME,
    host: process.env.DEV_DATABASE_URL,
    port: 5432,
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
    port: 5432,
    dialect: 'postgres',
    dialectOptions: {
      bigNumberStrings: true
    }
  },
  production: {
    username: process.env.PROD_DATABASE_USERNAME,
    password: process.env.PROD_DATABASE_PASSWORD,
    database: process.env.PROD_DATABASE_NAME,
    host: process.env.PROD_DATABASE_URL,
    port: process.env.PROD_DATABASE_PORT,
    dialect: 'postgres',
    dialectOptions: {
      bigNumberStrings: true
    }
  }
}
