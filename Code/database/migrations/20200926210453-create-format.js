'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('formats', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        allowNull: false,
        type: Sequelize.STRING
      },
      diameter: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      rpm: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      created_at: {
        defaultValue: new Date(),
        allowNull: false,
        type: Sequelize.DATE
      },
      updated_at: {
        defaultValue: new Date(),
        allowNull: false,
        type: Sequelize.DATE
      },
      deleted_at: {
        type: Sequelize.DATE,
        allowNull: true
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('formats');
  }
};