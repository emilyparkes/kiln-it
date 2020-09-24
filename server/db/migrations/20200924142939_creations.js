exports.up = knex => {
  return knex.schema.createTable('creations', table => {
    table.increments('id')
    table.integer('clay_type').references('clay.id')
    table.integer('creation_type').references('shapes.id')
    table.integer('status').references('statuses.id')
    table.integer('glaze').references('glazes.id')
    table.integer('weight_wet')
    table.integer('weight_leather_hard')
    table.integer('weight_bone_dry')
    table.integer('weight_bisque')
    table.integer('weight_glaze')
    table.integer('weight_complete')
    table.dateTime('date_created')
    table.dateTime('date_complete')
    table.string('note')
  })
}

exports.down = knex => {
  return knex.schema.dropTable('creations')
}
