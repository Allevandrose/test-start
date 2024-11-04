'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Farmer', {
      farmer_id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
      },
      farmer_name: {
        type: Sequelize.STRING(50),
        allowNull: false,
      },
      farmer_phone: {
        type: Sequelize.STRING(15),
        allowNull: false,
      },
      farmer_email: {
        type: Sequelize.STRING(50),
        allowNull: false,
        unique: true,
      },
      farmer_location: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      farmer_password: {
        type: Sequelize.STRING,
        allowNull: false,
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
    await queryInterface.dropTable('Farmer');
  }
};
