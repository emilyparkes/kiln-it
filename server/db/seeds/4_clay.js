exports.seed = (knex) => {
  return knex('clay')
    .then(() => {
      return knex('clay').insert([
        { id: 1, clay: 'White', in_use: true },
        { id: 2, clay: 'Grey Pebble', in_use: true },
        { id: 3, clay: 'Primo Red Stoneware', in_use: true },
        { id: 4, clay: 'Porcelian', in_use: false }
      ])
    })
}
