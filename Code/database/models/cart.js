'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Cart extends Model {
    static associate(models) {
      this.belongsTo(models.shipping, {foreignKey: 'shipping_id'});
      this.belongsTo(models.user, {foreignKey: 'user_id'});
      this.belongsTo(models.cart_state, {foreignKey: 'cart_state_id'});
      this.belongsToMany(models.product, {through: 'cart_product'});
    }
  };
  Cart.init({
    date: DataTypes.DATE,
    total: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'cart',
  });
  return Cart;
};