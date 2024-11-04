const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/database'); // Adjust the path as necessary

const Farmer = sequelize.define('Farmer', {
  farmer_id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false,
  },
  farmer_name: {
    type: DataTypes.STRING(50),
    allowNull: false,
  },
  farmer_phone: {
    type: DataTypes.INTEGER(15),
    allowNull: false,
  },
  farmer_email: {
    type: DataTypes.STRING(50),
    allowNull: false,
    unique: true,
  },
  farmer_location: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  farmer_password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  tableName: 'Farmer',
  timestamps: true,
});

module.exports = Farmer;
