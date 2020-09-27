'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Format extends Model {
    static associate(models) {
      this.hasMany(models.product, {foreignKey: 'format_id'});
    }
  };
  Format.init({
    name: DataTypes.STRING,
    diameter: DataTypes.INTEGER,
    rpm: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'format',
  });
  return Format;
};