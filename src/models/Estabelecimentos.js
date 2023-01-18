const Sequilize = require('sequelize');
const DataTypes = require('sequelize');
const sequelize = require('../database');


const Estabelecimentos = sequelize.define("estabelecimentos",{
    id : {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false, 
        primaryKey:true
    },
    nome: {
        type: DataTypes.STRING,
        allowNull: false, 
    },
    documento: {
        type: DataTypes.STRING,
        allowNull: false, 
    },
    tipo: {
        type: DataTypes.STRING,
        allowNull: false, 
    },
    CEP: {
        type: DataTypes.STRING,
        allowNull: false, 
    }
});


module.exports = Estabelecimentos;