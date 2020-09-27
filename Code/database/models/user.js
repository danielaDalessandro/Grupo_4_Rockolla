'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
      this.hasMany(models.cart, {foreignKey: 'user_id'});
      this.hasMany(models.user_token, {foreignKey: 'user_id'});
      this.belongsTo(models.user_role, {foreignKey: 'role_id'});
    }
  };
  User.init({
    email: DataTypes.STRING,
    fname: DataTypes.STRING,
    lname: DataTypes.STRING,
    password: DataTypes.STRING,
    avatar: DataTypes.STRING,
    street: DataTypes.STRING,
    number: DataTypes.INTEGER,
    city: DataTypes.STRING,
    apartment: DataTypes.STRING,
    zip_code: DataTypes.INTEGER,
    province: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'user',
  });
  return User;
};