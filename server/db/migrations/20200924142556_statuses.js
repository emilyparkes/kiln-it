exports.up = knex => {
  return knex.schema.createTable('statuses', table => {
    table.increments('id')
    table.string('status')
  })
}

exports.down = knex => {
  return knex.schema.dropTable('statuses')
}
