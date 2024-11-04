'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Commodity', {
      commodity_id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
      },
      commodity_name: {
        type: Sequelize.STRING(50),
        allowNull: false,
        unique: true,
      },
      commodity_category: {
        type: Sequelize.STRING(50),
        allowNull: false,
      },
      commodity_origin: {
        type: Sequelize.STRING(50),
        allowNull: false,
      },
      commodity_price_per_kg: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      commodity_sale_price: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      commodity_weight_available: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      picture: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      morePictures: {
        type: Sequelize.JSON,
        allowNull: false,
      },
      farmer_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Farmer', // Foreign key reference to Farmer table
          key: 'farmer_id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW,
      }
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Commodity');
  }
};
