'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class city_states extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  city_states.init({
    city_name: DataTypes.STRING,
    state_name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'city_states',
  });
  return city_states;
};