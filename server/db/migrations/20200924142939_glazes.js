exports.up = (knex) => {
  return knex.schema.createTable("glazes", (table) => {
    table.increments("id")
    table.string("glaze")
  })
}

exports.down = (knex) => {
  return knex.schema.dropTable("glazes")
}
