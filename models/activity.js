'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class activity extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  activity.init({
    userId: DataTypes.INTEGER,
    sport: DataTypes.STRING,
    title: DataTypes.STRING,
    time: DataTypes.INTEGER,
    distance: DataTypes.INTEGER,
    elevation: DataTypes.INTEGER,
    image: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'activity',
  });
  return activity;
};