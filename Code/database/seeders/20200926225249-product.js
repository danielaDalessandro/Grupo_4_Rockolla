'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('products', [
      {title:'Yendo de la Cama al Living', price:1200, description:'Alguna descripcion...' ,cover:'tapa-1600989503914.jpeg',publish_date:"1995-10-02", stock:1, highlight:0, format_id:1, artist_id:4, label_id:1, genre_id:4},
      {title:'(Whats the story?) Morning Glory', price:1600, description:'Alguna descripcion...' ,cover:'tapa-1600911903601.jpg',publish_date:"1995-10-02", stock:4, highlight:0, format_id:1, artist_id:1, label_id:7, genre_id:2},
      {title:'Let it be', price:1800, description:'Alguna descripcion...' ,cover:'tapa-1600985609780.jpeg',publish_date:"1995-10-02", stock:2, highlight:1, format_id:1, artist_id:7, label_id:8, genre_id:3},
      {title:'Sticky Fingers', price:1700, description:'Alguna descripcion...' ,cover:'tapa-1598296642968.jpeg',publish_date:"1995-10-02", stock:5, highlight:1, format_id:1, artist_id:3, label_id:9, genre_id:3},
      {title:'Exile on Main Street', price:2000, description:'Alguna descripcion...' ,cover:'tapa-1598222521389.jpeg',publish_date:"1995-10-02", stock:4, highlight:1, format_id:1, artist_id:3, label_id:9, genre_id:3},
      {title:'White Album', price:1200, description:'Alguna descripcion...' ,cover:'tapa-1600987832469.jpeg',publish_date:"1995-10-02", stock:1, highlight:1, format_id:1, artist_id:7, label_id:8, genre_id:3},
      {title:'AM', price:1500, description:'Alguna descripcion...' ,cover:'tapa-1600989752817.jpeg',publish_date:"1995-10-02", stock:7, highlight:1, format_id:1, artist_id:12, label_id:6, genre_id:2},
      {title:'Stadium Arcadium (Jupiter)', price:1400, description:'Alguna descripcion...' ,cover:'tapa-1600986189032.jpg',publish_date:"1995-10-02", stock:3, highlight:1, format_id:1, artist_id:2, label_id:3, genre_id:5},
      {title:'Stadium Arcadium (Mars)', price:1400, description:'Alguna descripcion...' ,cover:'tapa-1600988438060.jpeg',publish_date:"1995-10-02", stock:5, highlight:0, format_id:1, artist_id:2, label_id:3, genre_id:5},
      {title:'Clics Modernos', price:1400, description:'Alguna descripcion...' ,cover:'tapa-1600989020529.jpeg',publish_date:"1995-10-02", stock:4, highlight:1, format_id:1, artist_id:4, label_id:1, genre_id:4},
      {title:'Artaud', price:1600, description:'Alguna descripcion...' ,cover:'tapa-1600989867601.jpeg',publish_date:"1995-10-02", stock:3, highlight:1, format_id:1, artist_id:5, label_id:4, genre_id:4},
      {title:'Definitely Maybe', price:1600, description:'Alguna descripcion...' ,cover:'tapa-1600811872465.jpg',publish_date:"1995-10-02", stock:3, highlight:1, format_id:1, artist_id:1, label_id:7, genre_id:2},
      {title:'Almendra', price:1200, description:'Alguna descripcion...' ,cover:'tapa-1600988561244.jpeg',publish_date:"1995-10-02", stock:2, highlight:1, format_id:1, artist_id:6, label_id:6, genre_id:4},
      {title:'My Generation', price:1200, description:'Alguna descripcion...' ,cover:'tapa-1600988715447.jpeg',publish_date:"1995-10-02", stock:1, highlight:0, format_id:1, artist_id:8, label_id:10, genre_id:3},
      {title:'Viva la Vida or Death and All His Friends', price:1600, description:'Alguna descripcion...' ,cover:'tapa-1600988785317.jpeg',publish_date:"1995-10-02", stock:2, highlight:0, format_id:1, artist_id:9, label_id:11, genre_id:2},
      {title:'Parachutes', price:1800, description:'Alguna descripcion...' ,cover:'tapa-1600989133175.jpeg',publish_date:"1995-10-02", stock:2, highlight:1, format_id:1, artist_id:9, label_id:11, genre_id:2},
      {title:'Axis: Bold as Love', price:1600, description:'Alguna descripcion...' ,cover:'tapa-1600985097832.jpeg',publish_date:"1995-10-02", stock:3, highlight:0, format_id:1, artist_id:10, label_id:12, genre_id:17},
      {title:'Blur', price:1200, description:'Alguna descripcion...' ,cover:'tapa-1600985172540.jpeg',publish_date:"1995-10-02", stock:5, highlight:0, format_id:1, artist_id:11, label_id:13, genre_id:2},
      {title:'Californication', price:1700, description:'Alguna descripcion...' ,cover:'tapa-1600912101879.jpeg',publish_date:"1995-10-02", stock:6, highlight:0, format_id:1, artist_id:2, label_id:3, genre_id:5},
      {title:'Dark Side of The Moon', price:1200, description:'Alguna descripcion...' ,cover:'tapa-1600985292612.jpeg',publish_date:"1995-10-02", stock:8, highlight:1, format_id:1, artist_id:13, label_id:11, genre_id:17},
      {title:'The Rise and Fall of Ziggy Stardust and the Spiders from Mars', price:1500, description:'Alguna descripcion...' ,cover:'tapa-1600985404124.jpeg',publish_date:"1995-10-02", stock:4, highlight:0, format_id:1, artist_id:14, label_id:9, genre_id:19},
      {title:'A Night at The Opera', price:1900, description:'Alguna descripcion...' ,cover:'tapa-1600985452838.jpeg',publish_date:"1995-10-02", stock:7, highlight:1, format_id:1, artist_id:15, label_id:5, genre_id:20},
      {title:'Queen II', price:1600, description:'Alguna descripcion...' ,cover:'tapa-1600985500831.jpeg',publish_date:"1995-10-02", stock:4, highlight:1, format_id:1, artist_id:15, label_id:5, genre_id:20},
      {title:'Tattoo You', price:1700, description:'Alguna descripcion...' ,cover:'tapa-1600984732322.jpeg',publish_date:"1995-10-02", stock:3, highlight:0, format_id:1, artist_id:3, label_id:1, genre_id:3},
      {title:"Sgt. Pepper's Lonely Hearts Club Band", price:1200, description:'Alguna descripcion...' ,cover:'tapa-1600984834013.jpeg',publish_date:"1995-10-02", stock:5, highlight:1, format_id:1, artist_id:7, label_id:8, genre_id:3},
      {title:"Houses of The Holy", price:2200, description:'Alguna descripcion...' ,cover:'tapa-1601183225076.jpeg',publish_date:"1995-10-02", stock:5, highlight:1, format_id:1, artist_id:16, label_id:14, genre_id:18}
  ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('products', null, {});
  }
};
