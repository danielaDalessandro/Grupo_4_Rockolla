'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('formats', [
      {name: 'LP', diameter: 12, rpm: 33},
      {name: 'LP', diameter: 12, rpm: 45},
      {name: 'Double', diameter: 12, rpm: 33},
      {name: 'LP', diameter: 10, rpm: 33},
      {name: 'LP', diameter: 10, rpm: 45},
      {name: 'Single', diameter: 10, rpm: 33},
      {name: 'Single', diameter: 7, rpm: 45},
      {name: 'EP', diameter: 12, rpm: 33},
      {name: 'BoxSet', diameter: 12, rpm: 33},
  ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('genres', null, {});
  }
};
