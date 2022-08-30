'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
   
      await queryInterface.bulkInsert('galleries', 
      [{
        gallery_category: 'Gallery category',
        title: 'category',
        image_url: 'www.image.com',
        record_index: "Index of record",
        createdAt:Sequelize.literal('CURRENT_TIMESTAMP'),
        updatedAt:Sequelize.literal('CURRENT_TIMESTAMP')
      },
      {
        gallery_category: 'Gallery category',
        title: 'category',
        image_url: 'www.image.com',
        record_index: "Index of record",
        createdAt:Sequelize.literal('CURRENT_TIMESTAMP'),
        updatedAt:Sequelize.literal('CURRENT_TIMESTAMP')
      }]);
  },

  async down (queryInterface, Sequelize) {
  
      await queryInterface.bulkDelete('galleries', null, {
        truncate: true,
        cascade: true,
      });
     
  }
};
