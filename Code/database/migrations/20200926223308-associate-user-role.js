'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn(
      'users',
      'role_id',
      {
        type: Sequelize.INTEGER,
        allowNull:false,
        defaultValue: 1,
        references: {
          model: 'user_roles', // name of Target table
          key: 'id', // key in Target table that we're referencing
        }
      }
    )
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn(
      'users', // name of Source table
      'role_id' // key we want to remove
    );
  }
};