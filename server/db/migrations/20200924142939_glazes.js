exports.up = (knex) => {
  return knex.schema.createTable('glazes', (table) => {
    table.increments('id')
    table.string('glaze')
    table.boolean('in_use').defaultTo(true)
  })
}

exports.down = (knex) => {
  return knex.schema.dropTable('glazes')
}
