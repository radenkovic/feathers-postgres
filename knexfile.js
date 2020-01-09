// Update with your config settings.
require('dotenv').config();

module.exports = {
  client: 'postgres',
  connection: {
    host: process.env.POSTGRES_HOST,
    port: process.env.POSTGRES_PORT,
    user: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    database: process.env.POSTGRES_DB
  },
  migrations: {
    tableName: 'migrations'
  }
};
