exports.seed = (knex) => {
  const empty = table => knex(table).del()

  return empty('users')
    .then(() => empty('creations'))
    .then(() => empty('statuses'))
    .then(() => empty('glazes'))
    .then(() => empty('clay'))
    .then(() => empty('shapes'))
}