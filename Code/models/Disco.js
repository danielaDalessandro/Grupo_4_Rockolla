/**
 * Discos.js
 */

module.exports = {
    attributes: {
      titulo: { type: 'string' },
  
      artista: { type: 'string' },
  
      sello: { type: 'string' },
  
      genero: {type: 'Genero'},
    
      fechaPublicacion: { type: 'Date' },
    
      tapa: {type: 'string'},

      formato: {type: 'Formato'},

      precio: {type: 'int'},

      descripcion: {type: 'string'}
    },
};