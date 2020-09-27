'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('genres', [
      {name: 'Rock'},
      {name: 'Brit Rock'},
      {name: 'Classic Rock'},
      {name: 'Rock Nacional'},
      {name: 'Funk Rock'},
      {name: 'Classical'},
      {name: 'Latin'},
      {name: 'Jazz'},
      {name: 'Reggae'},
      {name: 'Blues'},
      {name: 'Punk Rock'},
      {name: 'Pop'},
      {name: 'Electro'},
      {name: 'Rock en Español'},
      {name: 'Tropical'},
      {name: 'Metal'},
      {name: 'Psychodelic Rock'},
      {name: 'Hard Rock'},
      {name: 'Glam Rock'},
      {name: 'Symph Rock'},
      {name: 'Other'},
  ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('genres', null, {});
  }
};

