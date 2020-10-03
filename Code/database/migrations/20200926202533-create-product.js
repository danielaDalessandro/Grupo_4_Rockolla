'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('products', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      title: {
        allowNull: false,
        type: Sequelize.STRING
      },
      price: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      publish_date: {
        type: Sequelize.DATEONLY
      },
      description: {
        allowNull: false,
        type: Sequelize.STRING
      },
      cover: {
        allowNull: false,
        type: Sequelize.STRING
      },
      stock: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      highlight: {
        defaultValue: 0,
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
    await queryInterface.dropTable('products');
  }
};