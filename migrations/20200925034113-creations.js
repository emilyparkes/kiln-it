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
    creation_type: {
      type: Sequelize.INTEGER
    },
    status: {
      type: Sequelize.INTEGER
    },
    glaze: {
      type: Sequelize.INTEGER
    },
    weight_wet: {
      type: Sequelize.INTEGER
    },
    weight_leather_hard: {
      type: Sequelize.INTEGER
    },
    weight_bone_dry: {
      type: Sequelize.INTEGER
    },
    weight_bis: {
      type: Sequelize.INTEGER
    },
    note: {
      type: Sequelize.STRING
    },
    created_at: {
      allowNull: false,
      type: Sequelize.DATE
    },
    updated_at: {
      type: Sequelize.DATE
    },
    completed_at: {
      type: Sequelize.DATE
    }
  })
}

exports.down = async (queryInterface) => {
  await queryInterface.dropTable('Creations')
}
