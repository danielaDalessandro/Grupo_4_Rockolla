'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    static associate(models) {
      this.belongsTo(models.format, {foreignKey: 'format_id'});
      this.belongsTo(models.label, {foreignKey: 'label_id'});
      this.belongsTo(models.artist, {foreignKey: 'artist_id'});
      this.belongsTo(models.genre, {foreignKey: 'genre_id'});
      this.belongsToMany(models.cart, {through: 'cart_product'});
    }
  };
  Product.init({
    title: DataTypes.STRING,
    price: DataTypes.INTEGER,
    publish_date: DataTypes.DATEONLY,
    description: DataTypes.STRING(1000),
    cover: DataTypes.STRING,
    stock: DataTypes.INTEGER,
    highlight: DataTypes.INTEGER 
  }, {
    sequelize,
    modelName: 'product',
    paranoid: true
  });
  return Product;
};