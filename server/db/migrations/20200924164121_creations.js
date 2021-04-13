exports.up = (knex) => {
  return knex.schema.createTable('creations', (table) => {
    table.increments('id')
    table.integer('clay').references('clay.id')
    table.integer('shape').references('shapes.id')
    table.integer('status').references('statuses.id')
    table.integer('glaze').references('glazes.id')
    table.integer('weight_leather_hard').defaultTo(0)
    table.integer('weight_bone_dry').defaultTo(0)
    table.integer('weight_bisque_fired').defaultTo(0)
    table.integer('weight_glazed').defaultTo(0)
    table.integer('weight_complete').defaultTo(0)
    table.string('name')
    table.text('description')
    table.text('note')
    table.dateTime('date_created')
    table.dateTime('date_completed')
    table.string('img_leather_hard')
    table.string('img_bisque_fired')
    table.string('img_glazed')
    table.string('img_complete')
    table.string('img_gallery')
  })
}

exports.down = (knex) => {
  return knex.schema.dropTable('creations')
}
