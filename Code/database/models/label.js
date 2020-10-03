'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Label extends Model {
    static associate(models) {
      this.hasMany(models.product, {foreignKey: 'label_id'});
    }
  };
  Label.init({
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'label',
    paranoid:true
  });
  return Label;
};