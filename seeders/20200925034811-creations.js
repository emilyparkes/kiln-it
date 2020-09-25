'use strict'

exports.up = (queryInterface, Sequelize) => {
  return queryInterface.bulkInsert('Creations', [
    { id: 2, clay_type: 1, creation_type: 2, status: 2, glaze: 4, weight_wet: 0, weight_leather_hard: 0, weight_bone_dry: 0, weight_bisque: 0, weight_complete: 0, created_at: '2020-06-15T13:45:30', updated_at: '2020-06-15T13:45:30', completed_at: '2020-07-15T13:45:30', note: 'Glaze with criss-cross pattern' },
    { id: 1, clay_type: 2, creation_type: 2, status: 1, glaze: 4, weight_wet: 0, weight_leather_hard: 0, weight_bone_dry: 0, weight_bisque: 0, weight_complete: 0, created_at: '2020-05-24T14:45:30', updated_at: '2020-05-24T14:45:30', completed_at: '2020-06-24T14:45:30', note: 'Glaze with criss-cross pattern' },
    { id: 3, clay_type: 3, creation_type: 2, status: 3, glaze: 4, weight_wet: 0, weight_leather_hard: 0, weight_bone_dry: 0, weight_bisque: 0, weight_complete: 0, created_at: '2020-05-25T14:49:30', updated_at: '2020-05-25T14:49:30', completed_at: '2020-06-25T14:49:30', note: 'Glaze in full colour' },
    { id: 4, clay_type: 1, creation_type: 2, status: 4, glaze: 4, weight_wet: 0, weight_leather_hard: 0, weight_bone_dry: 0, weight_bisque: 0, weight_complete: 0, created_at: '2020-05-28T16:23:30', updated_at: '2020-05-28T16:23:30', completed_at: '2020-07-28T16:23:30', note: 'Glaze in full colour' },
    { id: 5, clay_type: 1, creation_type: 2, status: 5, glaze: 4, weight_wet: 0, weight_leather_hard: 0, weight_bone_dry: 0, weight_bisque: 0, weight_complete: 0, created_at: '2020-07-12T16:11:30', updated_at: '2020-07-12T16:11:30', completed_at: '2020-08-15T13:45:30', note: 'Glaze top-half' },
    { id: 6, clay_type: 3, creation_type: 2, status: 6, glaze: 4, weight_wet: 0, weight_leather_hard: 0, weight_bone_dry: 0, weight_bisque: 0, weight_complete: 0, created_at: '2020-07-20T18:56:30', updated_at: '2020-07-20T18:56:30', completed_at: '2020-08-20T18:56:30', note: 'Glaze top-half and underglaze with black matte details' },
    { id: 7, clay_type: 1, creation_type: 2, status: 7, glaze: 4, weight_wet: 0, weight_leather_hard: 0, weight_bone_dry: 0, weight_bisque: 0, weight_complete: 0, created_at: '2020-07-21T12:34:30', updated_at: '2020-07-21T12:34:30', completed_at: '2020-08-21T12:34:30', note: '' },
    { id: 8, clay_type: 3, creation_type: 2, status: 8, glaze: 4, weight_wet: 0, weight_leather_hard: 0, weight_bone_dry: 0, weight_bisque: 0, weight_complete: 0, created_at: '2020-08-03T14:12:30', updated_at: '2020-08-03T14:12:30', completed_at: '2020-09-03T14:12:30', note: '' },
    { id: 9, clay_type: 2, creation_type: 2, status: 7, glaze: 4, weight_wet: 0, weight_leather_hard: 0, weight_bone_dry: 0, weight_bisque: 0, weight_complete: 0, created_at: '2020-08-10T17:22:30', updated_at: '2020-08-10T17:22:30', completed_at: '2020-09-10T17:22:30', note: '' }
  ])
}

exports.down = (queryInterface, Sequelize) => {
  return queryInterface.bulkDelete('Creations', null, {})
}
