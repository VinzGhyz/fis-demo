'use strict';

module.exports = (sequelize, DataTypes) => {
  let models = sequelize.models;

  var Model = sequelize.define('configurations', {
    version: {
      type: DataTypes.STRING,
    },
    configuration_default: {
      type: DataTypes.INTEGER,
    },
    image: {
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
        Model.belongsTo(models.configurations_defaults), {
          foreignKey: 'configuration_default',
          as: 'relconfiguration_default'
        };
        // Model.hasOne(models.advanced , {
        //   foreignKey: 'advanced',
        //   as: 'reladvanced'
        // });
        // Model.hasOne(models.features , {
        //   foreignKey: 'features',
        //   as: 'relfeatures'
        // });
        // Model.hasOne(models.apps , {
        //   foreignKey: 'apps',
        //   as: 'relapps'
        // });
        // Model.hasOne(models.utilities , {
        //   foreignKey: 'utilities',
        //   as: 'relutilities'
        // });
        Model.belongsTo(models.organizations, {
          foreignKey: 'organization',
          as: 'relorganization'
        });
      }
    },
    tableName: 'configurations',
    underscored: true,
    timestamps: false,
  });

  return Model;
};

