const knex = require('Knex');
const configuration = require('../../knexfile.js');

const connection = knex(configuration.development);

module.exports = connection;