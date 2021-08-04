exports.up = (knex) => {
  return knex.schema.createTable('clay', (table) => {
    table.increments('id')
    table.string('clay')
    table.boolean('in_use').defaultTo(true)
  })
}

exports.down = (knex) => {
  return knex.schema.dropTable('clay')
}
