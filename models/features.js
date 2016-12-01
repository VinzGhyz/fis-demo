'use strict';

module.exports = (sequelize, DataTypes) => {
  let models = sequelize.models;

  var Model = sequelize.define('features', {
  }, {
    classMethods: {
      associate: () => {
      }
    },
    tableName: 'features',
    
    timestamps: false,
  });

  return Model;
};

