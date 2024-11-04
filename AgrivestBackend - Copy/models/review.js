const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/database'); // Adjust the path as necessary
const Consumer = require('./Consumer'); // Import the Consumer model
const Farmer = require('./Farmer'); // Import the Farmer model

const Review = sequelize.define('Review', {
  review_id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false,
  },
  review_name: {
    type: DataTypes.STRING(50),
    allowNull: false,
  },
  review_comment: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  consumer_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'Consumer', // Link to the Consumer table
      key: 'consumer_id',
    },
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE',
  },
  farmer_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'Farmer', // Link to the Farmer table
      key: 'farmer_id',
    },
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE',
  },
}, {
  tableName: 'Review',
  timestamps: true,
});

// Define associations
Consumer.hasMany(Review, { foreignKey: 'consumer_id' });
Review.belongsTo(Consumer, { foreignKey: 'consumer_id' });

Farmer.hasMany(Review, { foreignKey: 'farmer_id' });
Review.belongsTo(Farmer, { foreignKey: 'farmer_id' });

module.exports = Review;
