'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Cart_state extends Model {
    static associate(models) {
      this.hasMany(models.cart, {foreignKey: 'cart_state_id'});
    }
  };
  Cart_state.init({
    state_name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'cart_state',
  });
  return Cart_state;
};