'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('labels', [
      {name: 'Universal'},
      {name: 'Columbia'},
      {name: 'Warner Bros'},
      {name: 'Microfón'},
      {name: 'EMI'},
      {name: 'Sony Music'},
      {name: 'Creation Records'},
      {name: 'Apple Records'},
      {name: 'Virgin Records'},
      {name: 'Decca'},
      {name: 'Capitol'},
      {name: 'Track'},
      {name: 'Food'},
      {name: 'Atlantic'},
      {name: 'Reprise'},
      {name: 'Fantasy'},
      {name: 'Geffen'},
      {name: 'Mercury'},
      {name: 'CBS'},
      {name: 'PMG'},
      {name: 'Domino'},
      {name: 'MCA'},
      {name: 'DGC'},
      {name: 'RSO'}
  ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('labels', null, {});
  }
};