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
    
      tapa: {type: 'Tapa'},

      canciones: {type: 'Canciones'}
    },
};