'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
   
      await queryInterface.bulkInsert('city_states', 
      [{
        city_name: 'Bhopal',
        state_name: "Madhya pradesh",
        createdAt:Sequelize.literal('CURRENT_TIMESTAMP'),
        updatedAt:Sequelize.literal('CURRENT_TIMESTAMP')
      },
      {
        city_name: 'Hyderabad',
        state_name: "Telangana",
        createdAt:Sequelize.literal('CURRENT_TIMESTAMP'),
        updatedAt:Sequelize.literal('CURRENT_TIMESTAMP')
      },
    ]);
  },

  async down (queryInterface, Sequelize) {
  
    await queryInterface.bulkDelete('city_states', null, {
      truncate: true,
      cascade: true,
    });
    
  }
};
