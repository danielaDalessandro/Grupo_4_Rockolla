'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn(
      'user_tokens',
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
      'user_tokens', // name of Source table
      'user_id' // key we want to remove
    );
  }
};