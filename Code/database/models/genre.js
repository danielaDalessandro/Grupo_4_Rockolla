'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Genre extends Model {
    static associate(models) {
      this.hasMany(models.product, {foreignKey: 'genre_id'});
    }
  };
  Genre.init({
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'genre',
  });
  return Genre;
};