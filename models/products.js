'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class products extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  products.init({
    product_type_id: DataTypes.INTEGER,
    product_code: DataTypes.STRING,
    title: DataTypes.STRING,
    price: DataTypes.BIGINT,
    address_1: DataTypes.STRING,
    address_2: DataTypes.STRING,
    city_id: DataTypes.INTEGER,
    product_img_url: DataTypes.STRING,
    description: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'products',
  });
  return products;
};