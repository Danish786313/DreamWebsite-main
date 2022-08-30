'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {

      await queryInterface.bulkInsert('gallery_categories', 
      [{
        category_name: 'This is a category name',
        createdAt:Sequelize.literal('CURRENT_TIMESTAMP'),
        updatedAt:Sequelize.literal('CURRENT_TIMESTAMP')
      },
      {
        category_name: 'This is a category name',
        createdAt:Sequelize.literal('CURRENT_TIMESTAMP'),
        updatedAt:Sequelize.literal('CURRENT_TIMESTAMP')
      }]);
  },

  async down (queryInterface, Sequelize) {
  
    await queryInterface.bulkDelete('gallery_categories', null, {
      truncate: true,
      cascade: true,
    });
     
  }
};
