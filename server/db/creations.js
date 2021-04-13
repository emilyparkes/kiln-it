const { connection } = require('./connection')

module.exports = {
  getCreations,
  getCreationById
}

function getCreations (db = connection) {
  return db('creations')
    .join('clay', 'clay.id', 'creations.clay')
    .join('glazes', 'glazes.id', 'creations.glaze')
    .join('shapes', 'shapes.id', 'creations.shape')
    .join('statuses', 'statuses.id', 'creations.status')
    .select(
      'creations.id as creationId',
      'clay.clay as clay',
      'glazes.glaze as glaze',
      'shapes.shape as shape',
      'statuses.status as status',
      'weight_leather_hard',
      'weight_bone_dry',
      'weight_bisque_fired',
      'weight_glazed',
      'weight_complete',
      'date_created',
      'date_completed',
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
      'creations.id as creationId',
      'clay.clay as clay',
      'glazes.glaze as glaze',
      'shapes.shape as shape',
      'statuses.status as status',
      'weight_leather_hard',
      'weight_bone_dry',
      'weight_bisque_fired',
      'weight_glazed',
      'weight_complete',
      'date_created',
      'date_completed',
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
