'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Consumer', {
      consumer_id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
      },
      consumer_name: {
        type: Sequelize.STRING(50),
        allowNull: false
      },
      consumer_phone: {
        type: Sequelize.STRING(15),
        allowNull: false
      },
      consumer_email: {
        type: Sequelize.STRING(50),
        allowNull: false,
        unique: true
      },
      consumer_password: {
        type: Sequelize.STRING,
        allowNull: false
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW
      }
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Consumer');
  }
};
