/**
 * Usuario.js
 */

module.exports = {
    attributes: {
        nombre: { type: 'string' },

        mail: { type: 'string' },

        contrasenia: { type: 'string' },

        genero: {type: 'Genero'},
    
        fechaNac: { type: 'Date' },
    },
};