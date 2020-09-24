exports.up = knex => {
  return knex.schema.createTable('users', table => {
    table.increments('id')
    table.string('username')
    table.binary('hash')
    table.string('user_type')
  })
}

exports.down = knex => {
  return knex.schema.dropTable('users')
}
