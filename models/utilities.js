'use strict';

module.exports = (sequelize, DataTypes) => {
  let models = sequelize.models;

  var Model = sequelize.define('utilities', {
  }, {
    classMethods: {
      associate: () => {
      }
    },
    tableName: 'utilities',
    
    timestamps: false,
  });

  return Model;
};

