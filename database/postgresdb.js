require('dotenv').config();

const environment = process.env.NODE_ENV || 'development';
const configuration = require(__dirname + '/../knexfile.js')[environment];
console.log(configuration);
const database = require('knex')(configuration);