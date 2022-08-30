'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    
    await queryInterface.bulkInsert('myusers', 
    [{
      first_name: 'john',
      last_name: 'Bosco',
      bio: 'This is bio data',
      createdAt:Sequelize.literal('CURRENT_TIMESTAMP'),
      updatedAt:Sequelize.literal('CURRENT_TIMESTAMP')
      },
      {
        first_name: 'john',
        last_name: 'Bosco',
        bio: 'This is bio data',
        createdAt:Sequelize.literal('CURRENT_TIMESTAMP'),
        updatedAt:Sequelize.literal('CURRENT_TIMESTAMP')
        }]);    
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('myusers', null, {
      truncate: true,
      cascade: true,
    }); 
  }
};
