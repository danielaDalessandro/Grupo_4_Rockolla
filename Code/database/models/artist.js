'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Artist extends Model {
    static associate(models) {
      this.hasMany(models.product, {foreignKey: 'artist_id'});
    }
  };
  Artist.init({
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'artist',
    paranoid:true
  });
  return Artist;
};