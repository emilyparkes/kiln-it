exports.seed = async (knex) => {
  await knex('clay').del()
  await knex('clay').insert([
    { id: 1, clay: 'White' },
    { id: 2, clay: 'Grey Pebble' },
    { id: 3, clay: 'Primo Red Stoneware' }
  ])
}
