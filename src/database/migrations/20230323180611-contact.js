'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
     await queryInterface.createTable('contact',
     {
      id: {
        type:Sequelize.INTEGER,
        allowNull:false,
        primaryKey:true,
        autoIncrement:true
       },
       name:{
        type:Sequelize.STRING,
        allowNull:false
       },
       email:{
        type:Sequelize.STRING,
        unique:true,
        allowNull:false
       },
       created_at:{
        type:Sequelize.DATE,
        allowNull:false
       },
       updated_at:{
        type:Sequelize.DATE,
        allowNull:false
       },
       customer_id:{
        type:Sequelize.INTEGER,
        references:{model:'costumers', key: "id"},
        onUpdate:'CASCADE',
        onDelete:'CASCADE',
        allowNull:false
       }
    }
     );

  },

  async down (queryInterface, Sequelize) {
     await queryInterface.dropTable('contact');

  }
};
