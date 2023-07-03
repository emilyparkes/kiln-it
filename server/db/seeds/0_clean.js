exports.seed = (knex) => {
  return knex('glaze_creations').del()
    .then(() => knex('creations').del())
    .then(() => knex('shapes').del())
    .then(() => knex('clay').del())
    .then(() => knex('glazes').del())
    .then(() => knex('statuses').del())
}

