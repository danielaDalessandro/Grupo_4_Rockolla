'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn(
      'products',
      'format_id',
      {
        type: Sequelize.INTEGER,
        references: {
          model: 'formats', // name of Target table
          key: 'id', // key in Target table that we're referencing
        }
      }
    )
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn(
      'products', // name of Source table
      'format_id' // key we want to remove
    );
  }
};

