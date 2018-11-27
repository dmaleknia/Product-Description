require('dotenv').config();

module.exports = {

   development: {
     client: 'postgresql',
     connection: process.env.POSTGRES_URL,
   },

  // staging: {
  //   client: 'postgresql',
  //   connection: process.env.POSTGRES_URL,
  //   // connection: {
  //   //   database: '',
  //   //   user:     '',
  //   //   password: ''
  //   // },
  //   pool: {
  //     min: 2,
  //     max: 10
  //   },
  //   migrations: {
  //     tableName: 'knex_migrations'
  //   }
  // },

  production: {
    client: 'postgresql',
    connection: process.env.POSTGRES_URL,
  }

};