'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Sales', {
      sales_id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
      },
      sales_condition: {
        type: Sequelize.ENUM('pending', 'completed', 're-fund'),
        allowNull: false,
      },
      sales_buy: {
        type: Sequelize.FLOAT,
        allowNull: false,
      },
      sales_sell: {
        type: Sequelize.FLOAT,
        allowNull: false,
      },
      sales_profit: {
        type: Sequelize.FLOAT,
        allowNull: false,
      },
      sales_weight: {
        type: Sequelize.FLOAT,
        allowNull: false,
      },
      commodity_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Commodity', // Foreign key reference to the Commodity table
          key: 'commodity_id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      farmer_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Farmer', // Foreign key reference to the Farmer table
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
    await queryInterface.dropTable('Sales');
  }
};
