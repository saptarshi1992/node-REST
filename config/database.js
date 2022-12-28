const Sequelize = require('sequelize') 

module.exports = new Sequelize('mydatabase', 'postgres', 'myPassword', {
    host: 'localhost',
    dialect: 'postgres'
  });