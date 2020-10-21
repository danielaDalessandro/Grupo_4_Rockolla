'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('cart_states', [
      {state_name: 'Pending'},
      {state_name: 'Paid'},
      {state_name: 'Canceled'}
  ], {});
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('cart_states', null, {});
  }
};
