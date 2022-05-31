exports.up = (knex) => {
  return knex.schema.createTable('users', (table) => {
    table.increments('id')
    table.string('email')
    table.binary('uid')
    table.string('role')
  })
}

exports.down = (knex) => {
  return knex.schema.dropTable('users')
}
