const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/database'); // Adjust the path as necessary

const Admin = sequelize.define('Admin', {
    adminname: {
        type: Sequelize.STRING(50),
        allowNull: false
      },
      email: {
        type: Sequelize.STRING(50),
        allowNull: false,
        unique: true
      },
      password: {
        type: Sequelize.STRING,
        allowNull: false
      },
}, {
    tableName: 'Admin',
    timestamps: true,
  });

module.exports = Admin; // Ensure this is correct


