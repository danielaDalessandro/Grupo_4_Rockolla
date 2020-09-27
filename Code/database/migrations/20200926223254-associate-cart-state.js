'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn(
      'carts',
      'state_id',
      {
        type: Sequelize.INTEGER,
        references: {
          model: 'cart_states', // name of Target table
          key: 'id', // key in Target table that we're referencing
        }
      }
    )
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn(
      'carts', // name of Source table
      'state_id' // key we want to remove
    );
  }
};