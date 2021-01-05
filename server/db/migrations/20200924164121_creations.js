exports.up = (knex) => {
  return knex.schema.createTable('creations', (table) => {
    table.increments('id')
    table.integer('clay').references('clay.id')
    table.integer('shape').references('shapes.id')
    table.integer('status').references('statuses.id')
    table.integer('glaze').references('glazes.id')
    table.integer('weight_wet').defaultTo(0)
    table.integer('weight_leather_hard').defaultTo(0)
    table.integer('weight_bone_dry').defaultTo(0)
    table.integer('weight_bisque').defaultTo(0)
    table.integer('weight_glaze').defaultTo(0)
    table.integer('weight_complete').defaultTo(0)
    table.dateTime('date_created')
    table.dateTime('date_complete')
    table.string('note')
  })
}

exports.down = (knex) => {
  return knex.schema.dropTable('creations')
}
