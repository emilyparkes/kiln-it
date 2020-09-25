'use strict'
exports.up = async (queryInterface, Sequelize) => {
  await queryInterface.createTable('Creations', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER
    },
    clay_type: {
      type: Sequelize.INTEGER
    },
    note: {
      type: Sequelize.STRING
    },
    createdAt: {
      allowNull: false,
      type: Sequelize.DATE
    },
    updatedAt: {
      allowNull: false,
      type: Sequelize.DATE
    }
  })
}

exports.down = async (queryInterface) => {
  await queryInterface.dropTable('Creations')
}
