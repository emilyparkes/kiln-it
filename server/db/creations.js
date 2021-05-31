const { connection } = require('./connection')

module.exports = {
  getCreations,
  getCreationById,
  updateCreationById
}

function getCreations (db = connection) {
  return db('creations')
    .join('clay', 'clay.id', 'creations.clay')
    .join('glazes', 'glazes.id', 'creations.glaze')
    .join('shapes', 'shapes.id', 'creations.shape')
    .join('statuses', 'statuses.id', 'creations.status')
    .select(
      'creations.id',
      'clay.id as clayId',
      'glazes.id as glazeId',
      'shapes.id as shapeId',
      'statuses.id as statusId',
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
    .join('clay', 'clay.id', 'creations.clay')
    .join('glazes', 'glazes.id', 'creations.glaze')
    .join('shapes', 'shapes.id', 'creations.shape')
    .join('statuses', 'statuses.id', 'creations.status')
    .where('creations.id', id)
    .select(
      'creations.id',
      'clay.id as clayId',
      'glazes.id as glazeId',
      'shapes.id as shapeId',
      'statuses.id as statusId',
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
