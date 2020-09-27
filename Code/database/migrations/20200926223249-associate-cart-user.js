'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn(
      'carts',
      'user_id',
      {
        type: Sequelize.INTEGER,
        references: {
          model: 'users', // name of Target table
          key: 'id', // key in Target table that we're referencing
        }
      }
    )
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn(
      'carts', // name of Source table
      'user_id' // key we want to remove
    );
  }
};