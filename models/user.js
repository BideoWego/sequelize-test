"use strict";

module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define('User', {
    username: DataTypes.STRING
  }, {
    tableName: "users",
    timestamps: false,
    classMethods: {
      associate: function(models) {
        User.hasMany(models.Post);
      }
    }
  });

  return User;
};






