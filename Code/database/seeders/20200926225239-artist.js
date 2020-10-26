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
      {name: 'Led Zepelin'},
      {name: 'Bob Dylan'},
      {name: 'Eric Clapton'},
      {name: 'FleetWood Mac'},
      {name: 'Creedence ClearWater Revival'},
      {name: "Guns n' Roses"},
      {name: 'AC/DC'},
      {name: 'Bon Jovi'},
      {name: 'Soda Stereo'},
      {name: 'Gustavo Cerati'},
      {name: 'Luis Alberto Spineta'},
      {name: 'Los Fabulosos Cadillac'},
      {name: 'Aerosmith'},
      {name: 'John Mayer'},
      {name: 'Nirvana'},
      {name: 'Foo Fighters'},
      {name: 'Franz Ferdinand'},
      {name: 'Elton John'},
      {name: 'Lenny Kravitz'},
      {name: 'Jorge Drexler'}
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('artists', null, {});
  }
};