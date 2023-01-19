const Sequelize = require('sequelize');
const dotenv = require('dotenv/config.js');


const sequelize = new Sequelize("restaurantes", "root", "12345678", {
    dialect: "mysql",
    host: "localhost",
  });




module.exports = sequelize;