'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
   
     await queryInterface.bulkInsert('product_types', 
     [{
      product_type_name: 'This is product type name',
      createdAt:Sequelize.literal('CURRENT_TIMESTAMP'),
      updatedAt:Sequelize.literal('CURRENT_TIMESTAMP')
      },
      {
        product_type_name: 'This is product type name',
        createdAt:Sequelize.literal('CURRENT_TIMESTAMP'),
        updatedAt:Sequelize.literal('CURRENT_TIMESTAMP')
      }]);
  },

  async down (queryInterface, Sequelize) {
  
    await queryInterface.bulkDelete('product_types', null, {
      truncate: true,
      cascade: true,
    });
     
  }
};
