const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/database'); 
const Farmer = require('./Farmer'); // Make sure you require the Farmer model

const Commodity = sequelize.define('Commodity', {
  commodity_id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false,
  },
  commodity_name: {
    type: DataTypes.STRING(50),
    allowNull: false,
    unique: true,
  },
  commodity_category: {
    type: DataTypes.STRING(50),
    allowNull: false,
  },
  commodity_origin: {
    type: DataTypes.STRING(50),
    allowNull: false,
  },
  commodity_price_per_kg: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  commodity_sale_price: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  commodity_weight_available: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  picture: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  morePictures: {
    type: DataTypes.JSON,
    allowNull: false,
  },
  farmer_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'Farmer', // References the Farmer model
      key: 'farmer_id',
    },
  }
}, {
  tableName: 'Commodity',
  timestamps: true,
});

// Define associations (Farmer has many Commodities)
Farmer.hasMany(Commodity, { foreignKey: 'farmer_id' });
Commodity.belongsTo(Farmer, { foreignKey: 'farmer_id' });

module.exports = Commodity;
