const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/database'); // Adjust the path as necessary

const Consumer = sequelize.define('Consumer', {
  consumer_id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false,
  },
  consumer_name: {
    type: DataTypes.STRING(50),
    allowNull: false,
  },
  consumer_phone: {
    type: DataTypes.INTEGER(15),
    allowNull: false,
  },
  consumer_email: {
    type: DataTypes.STRING(50),
    allowNull: false,
    unique: true,
  },
  consumer_password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  tableName: 'Consumer',
  timestamps: true,
});

module.exports = Consumer;
