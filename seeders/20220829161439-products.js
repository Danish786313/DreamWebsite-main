'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    
     await queryInterface.bulkInsert('products', 
     [{
      product_type_id: 1,
      product_code: 1010,
      title: 'Title',
      price: 2020,
      address_1: 'Bhopal',
      address_2: 'Indore',
      city_id: 1,
      product_img_url: 'www.imageurl.com',
      description: 'Discription',
      createdAt:Sequelize.literal('CURRENT_TIMESTAMP'),
      updatedAt:Sequelize.literal('CURRENT_TIMESTAMP')
      },
      {
        product_type_id: 2,
        product_code: 1010,
        title: 'Title',
        price: 2020,
        address_1: 'Bhopal',
        address_2: 'Indore',
        city_id: 2,
        product_img_url: 'www.imageurl.com',
        description: 'Discription',
        createdAt:Sequelize.literal('CURRENT_TIMESTAMP'),
        updatedAt:Sequelize.literal('CURRENT_TIMESTAMP')
      }]);
    
  },

  async down (queryInterface, Sequelize) {
    
    await queryInterface.bulkDelete('products', null, {
      truncate: true,
      cascade: true,
    });
  }
};
