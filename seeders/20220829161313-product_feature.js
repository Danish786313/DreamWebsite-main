'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('product_features', 
    [{
      product_type_id: 1,
      feature_name: 'feature name',
      record_index: 10,
      createdAt:Sequelize.literal('CURRENT_TIMESTAMP'),
      updatedAt:Sequelize.literal('CURRENT_TIMESTAMP')
      },
      {
        product_type_id: 2,
        feature_name: 'feature name',
        record_index: 20,
        createdAt:Sequelize.literal('CURRENT_TIMESTAMP'),
        updatedAt:Sequelize.literal('CURRENT_TIMESTAMP')
        }]);
  },

  async down (queryInterface, Sequelize) {
    
    await queryInterface.bulkDelete('product_features', null, {
      truncate: true,
      cascade: true,
    });  
  }
};
