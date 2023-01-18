const Sequilize = require('sequelize');
const DataTypes = require('sequelize');
const sequelize = require('../database/index');

const Horarios = sequelize.define("horarios",{
    id:{
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false, 
        primaryKey:true
    },
    domingo: {
        type: DataTypes.STRING,
        allowNull: true
    },
    segunda:{
        type: DataTypes.STRING,
        allowNull: true
    },
    terca:{ 
        type: DataTypes.STRING,
        allowNull: true,
    },
    quarta:{ 
        type: DataTypes.STRING,
        allowNull: true
    },
    quinta:{
        type: DataTypes.STRING,
        allowNull: true,
    },
    sexta:{
        type: DataTypes.STRING,
        allowNull: true,
    },
    sabado:{
        type: DataTypes.STRING,
        allowNull: true,
    }
});

module.exports = Horarios;