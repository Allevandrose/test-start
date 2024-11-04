const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Farmer = require('./Farmer'); // Import the Farmer model
const Commodity = require('./commodity'); // Import the Commodity model

const Sales = sequelize.define('Sales', {
  sales_id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false,
  },
  sales_condition: {
    type: DataTypes.ENUM('pending', 'completed', 're-fund'),
    allowNull: false,
  },
  sales_buy: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  sales_sell: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  sales_profit: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  sales_weight: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  commodity_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'Commodity', // Link to the Commodity table using the commodity_id
      key: 'commodity_id',
    },
  },
  farmer_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'Farmer', // Link to the Farmer table using the farmer_id
      key: 'farmer_id',
    },
  },
}, {
  tableName: 'Sales',
  timestamps: true,
});

// Define associations
Farmer.hasMany(Sales, { foreignKey: 'farmer_id' });
Sales.belongsTo(Farmer, { foreignKey: 'farmer_id' });

Commodity.hasMany(Sales, { foreignKey: 'commodity_id' });
Sales.belongsTo(Commodity, { foreignKey: 'commodity_id' });

module.exports = Sales;
