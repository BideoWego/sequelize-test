'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('Person', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
    return queryInterface.bulkInsert('posts', [{
      id: 1,
      title: 'Hello Sequelize!',
      body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum quis molestias pariatur inventore dignissimos harum necessitatibus voluptatem culpa, magni consequatur ut provident quidem, commodi temporibus, nostrum reprehenderit sed illo suscipit.',
      user_id: 1
    }])
  },

  down: function (queryInterface, Sequelize) {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
    return queryInterface.bulkDelete('posts', null, {});
  }
};
