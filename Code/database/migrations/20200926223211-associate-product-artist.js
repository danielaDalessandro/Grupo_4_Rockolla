'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn(
      'products',
      'artist_id',
      {
        type: Sequelize.INTEGER,
        references: {
          model: 'artists', // name of Target table
          key: 'id', // key in Target table that we're referencing
        }
      }
    )
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn(
      'products', // name of Source table
      'artist_id' // key we want to remove
    );
  }
};