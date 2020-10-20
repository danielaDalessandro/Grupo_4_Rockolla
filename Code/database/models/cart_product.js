'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Cart_Product extends Model {
    static associate(models) {
      this.belongsTo(models.product, {foreignKey: 'product_id'});
      this.belongsTo(models.cart, {foreignKey: 'cart_id'});
    }
  };
  Cart_Product.init({
    ammount: DataTypes.INTEGER,
    price: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'cart_product',
    freezeTableName:true,
    timestamps: false
  });
  return Cart_Product;
};
  