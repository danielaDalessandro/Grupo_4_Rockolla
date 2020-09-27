'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('artists', [
      {name: 'Oasis'},
      {name: 'Red Hot Chily Peppers'},
      {name: 'The Rolling Stones'},
      {name: 'Charly Garcia'},
      {name: 'Pescado Rabioso'},
      {name: 'Almendra'},
      {name: 'The Beatles'},
      {name: 'The Who'},
      {name: 'Coldplay'},
      {name: 'The Jimmy Hendrix Experience'},
      {name: 'Blur'},
      {name: 'Arctic Monkeys'},
      {name: 'Pink Floyd'},
      {name: 'David Bowie'},
      {name: 'Queen'},
      {name: 'Led Zepelin'}
  ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('artists', null, {});
  }
};