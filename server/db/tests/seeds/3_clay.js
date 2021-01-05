exports.seed = (knex) => {
  return knex('clay')
    .del()
    .then(() => {
      return knex('clay').insert([
        { id: 1, clay: 'White' },
        { id: 2, clay: 'Grey Pebble' },
        { id: 3, clay: 'Primo Red Stoneware' }
      ])
    })
}
