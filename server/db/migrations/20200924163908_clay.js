exports.up = (knex) => {
  return knex.schema.createTable('clay', (table) => {
    table.increments('id')
    table.string('clay')
  })
}

exports.down = (knex) => {
  return knex.schema.dropTable('clay')
}
