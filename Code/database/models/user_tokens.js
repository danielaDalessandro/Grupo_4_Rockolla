'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User_token extends Model {
    static associate(models) {
      this.belongsTo(models.user, {foreignKey: 'user_id'});
    }
  };
  User_token.init({
    token: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'user_token',
  });
  return User_token;
};