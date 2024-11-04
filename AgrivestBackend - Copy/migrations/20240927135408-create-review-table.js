'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Review', {
      review_id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
      },
      review_name: {
        type: Sequelize.STRING(50),
        allowNull: false,
      },
      review_comment: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      consumer_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Consumer', // Foreign key reference to Consumer table
          key: 'consumer_id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
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
    await queryInterface.dropTable('Review');
  }
};
