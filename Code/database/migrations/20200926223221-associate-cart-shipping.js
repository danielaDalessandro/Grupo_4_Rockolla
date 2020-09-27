'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn(
      'carts',
      'shipping_id',
      {
        type: Sequelize.INTEGER,
        references: {
          model: 'shippings', // name of Target table
          key: 'id', // key in Target table that we're referencing
        }
      }
    )
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn(
      'carts', // name of Source table
      'shipping_id' // key we want to remove
    );
  }
};