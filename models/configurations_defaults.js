'use strict';

module.exports = (sequelize, DataTypes) => {
  let models = sequelize.models;

  var Model = sequelize.define('configurations_defaults', {
    name: {
      type: DataTypes.STRING,
    },
    created_at: {
      type: DataTypes.DATE,
    },
    updated_at: {
      type: DataTypes.DATE,
    },
  }, {
    classMethods: {
      associate: () => {
        // Model.hasOne(models.advanced, {
        //   foreignKey: 'advanced',
        //   as: 'reladvanced'
        // });
        // Model.hasOne(models.features, {
        //   foreignKey: 'features',
        //   as: 'relfeatures'
        // });
        // Model.hasOne(models.apps, {
        //   foreignKey: 'apps',
        //   as: 'relapps'
        // });
        // Model.hasOne(models.utilities, {
        //   foreignKey: 'utilities',
        //   as: 'relutilities'
        // });
      }
    },
    tableName: 'configurations_defaults',
    
    timestamps: false,
  });

  return Model;
};

