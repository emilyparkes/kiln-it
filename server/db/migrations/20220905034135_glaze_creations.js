exports.up = (knex) => {
  return knex.schema.createTable('glaze_creations', (table) => {
    table.increments('id')
    table.integer('glaze_id').references('glazes.id')
    table.integer('creation_id').references('creations.id')
  })
}

exports.down = (knex) => {
  return knex.schema.dropTable('glaze_creations')
}

