'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Shipping extends Model {
    static associate(models) {
      this.hasMany(models.cart, {foreignKey: 'shipping_id'});
    }
  };
  Shipping.init({
    price: DataTypes.INTEGER,
    dispatch_date: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'shipping',
  });
  return Shipping;
};