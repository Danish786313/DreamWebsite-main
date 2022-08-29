'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Gallery extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Gallery.init({
    gallery_category: DataTypes.INTEGER,
    title: DataTypes.STRING,
    image_url: DataTypes.STRING,
    record_index: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Gallery',
  });
  return Gallery;
};