'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
     await queryInterface.bulkInsert('cms', [{
        page_name: 'danish',
        short_desc: 'Short discription',
        description: 'discription',
        createdAt:Sequelize.literal('CURRENT_TIMESTAMP'),
        updatedAt:Sequelize.literal('CURRENT_TIMESTAMP')
      },
      {
        page_name: 'danish',
        short_desc: 'Short discription',
        description: 'discription',
        createdAt:Sequelize.literal('CURRENT_TIMESTAMP'),
        updatedAt:Sequelize.literal('CURRENT_TIMESTAMP')
      }]);
  },

  async down (queryInterface, Sequelize) {

    await queryInterface.bulkDelete('cms', null, {
      truncate: true,
      cascade: true,
    });
  }
};
