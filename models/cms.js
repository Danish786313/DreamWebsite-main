'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class cms extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  cms.init({
    page_name: DataTypes.STRING,
    short_desc: DataTypes.STRING,
    description: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'cms',
  });
  return cms;
};