'use strict'

exports.up = (queryInterface, Sequelize) => {
  return queryInterface.bulkInsert('Creations', [{
    firstName: 'John',
    lastName: 'Doe',
    email: 'demo@demo.com'
  }], {})
}

exports.down = (queryInterface, Sequelize) => {
  return queryInterface.bulkDelete('Users', null, {})
}
