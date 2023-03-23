'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('users', {
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
       password_hash:{
        type:Sequelize.STRING,
        allowNull:false
       },
       provider:{
        type:Sequelize.BOOLEAN,
        defaultValue:false,
        allowNull:false
       },
       created_at:{
        type:Sequelize.DATE,
        allowNull:false
       },
       updated_at:{
        type:Sequelize.DATE,
        allowNull:false
       }

    });

  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('users');

  }
};
