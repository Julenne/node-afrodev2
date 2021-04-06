const Sequelize = require('sequelize');
const config = require('config');
const instancia = new Sequelize(
  config.get('mysql.database'), // banco
  config.get('mysql.user'), //usuario
  config.get('mysql.password'), //senha
  {
    host: config.get('mysql.host'),
    port: config.get('mysql.port'),
    dialect: 'mysql'
  }
);