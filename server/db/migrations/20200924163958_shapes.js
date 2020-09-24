exports.up = knex => {
  return knex.schema.createTable('shapes', table => {
    table.increments('id')
    table.string('shape_type')
  })
}

exports.down = knex => {
  return knex.schema.dropTable('shapes')
}
