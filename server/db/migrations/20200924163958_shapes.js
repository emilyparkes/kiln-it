exports.up = (knex) => {
  return knex.schema.createTable('shapes', (table) => {
    table.increments('id')
    table.string('shape')
    table.boolean('in_use').defaultTo(true)
  })
}

exports.down = (knex) => {
  return knex.schema.dropTable('shapes')
}
