'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn(
      'products',
      'label_id',
      {
        type: Sequelize.INTEGER,
        references: {
          model: 'labels', // name of Target table
          key: 'id', // key in Target table that we're referencing
        }
      }
    )
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn(
      'products', // name of Source table
      'label_id' // key we want to remove
    );
  }
};