exports.seed = (knex) => {
  return knex('creations').del()
    .then(() => knex('shapes').del())
    .then(() => knex('clay').del())
    .then(() => knex('glazes').del())
    .then(() => knex('statuses').del())
    .then(() => knex('users').del())
}
