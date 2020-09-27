'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('carts', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      date: {
        allowNull: false,
        type: Sequelize.DATE
      },
      total: {
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
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('carts');
  }
};