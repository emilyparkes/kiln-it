const { connection } = require('./connection')

module.exports = {
  getCreations,
  getCreationById,
  updateCreationById
}

function getCreations (db = connection) {
  return db('creations')
    .join('clay', 'clay.id', 'creations.clay_id')
    .join('glazes', 'glazes.id', 'creations.glaze_id')
    .join('shapes', 'shapes.id', 'creations.shape_id')
    .join('statuses', 'statuses.id', 'creations.status_id')
    .select(
      'creations.id',
      'clay.id as clayId',
      'clay.clay',
      'glazes.id as glazeId',
      'glazes.glaze',
      'shapes.id as shapeId',
      'shapes.shape',
      'statuses.id as statusId',
      'statuses.status',
      'weight_leather_hard',
      'weight_bone_dry',
      'weight_bisque_fired',
      'weight_glazed',
      'weight_complete',
      'date_created',
      'date_complete',
      'description',
      'note',
      'name',
      'img_leather_hard',
      'img_bisque_fired',
      'img_glazed',
      'img_complete',
      'img_gallery'
    )
}

function getCreationById (id, db = connection) {
  return db('creations')
    .join('clay', 'clay.id', 'creations.clay_id')
    .join('glazes', 'glazes.id', 'creations.glaze_id')
    .join('shapes', 'shapes.id', 'creations.shape_id')
    .join('statuses', 'statuses.id', 'creations.status_id')
    .where('creations.id', id)
    .select(
      'creations.id',
      'clay.id as clayId',
      'clay.clay',
      'glazes.id as glazeId',
      'glazes.glaze',
      'shapes.id as shapeId',
      'shapes.shape',
      'statuses.id as statusId',
      'statuses.status',
      'weight_leather_hard',
      'weight_bone_dry',
      'weight_bisque_fired',
      'weight_glazed',
      'weight_complete',
      'date_created',
      'date_complete',
      'description',
      'note',
      'name',
      'img_leather_hard',
      'img_bisque_fired',
      'img_glazed',
      'img_complete',
      'img_gallery'
    ).first()
}

// how to insert shape change when it is value and not id?
function updateCreationById (id, creation, db = connection) {
  return db('creations')
    .where('creations.id', id)
    .update(creation)
}
