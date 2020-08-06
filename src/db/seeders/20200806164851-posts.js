'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Posts', [{
        title: 'Javascript',
        description: 'Javascript Facts',
        userId: 1,
        createdAt: new Date(),
        updatedAt: new Date()

      },
      {
        title: 'Node.js',
        description: 'Node.js Facts',
        userId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'php',
        description: 'php Facts',
        userId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'vue',
        description: 'vue Facts',
        userId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Android',
        description: 'Android Facts',
        userId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'bitcoin',
        description: 'bitcoin Facts',
        userId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Redux',
        description: 'Redux Facts',
        userId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);

  },

  down: async (queryInterface, Sequelize) => {

    await queryInterface.bulkDelete('Posts', null, {});

  }
};