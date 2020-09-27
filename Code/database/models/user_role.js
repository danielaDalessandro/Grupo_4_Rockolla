'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User_role extends Model {
    static associate(models) {
      // define association here
    }
  };
  User_role.init({
    role_name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'user_role',
  });
  return User_role;
};