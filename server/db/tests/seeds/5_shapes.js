exports.seed = (knex) => {
  return knex('shapes')
    .then(() => {
      return knex('shapes').insert([
        { id: 1, shape: 'Coffee Cup', in_use: true },
        { id: 2, shape: 'Plate', in_use: true },
        { id: 3, shape: 'Bowl', in_use: true },
        { id: 4, shape: 'Paint Palette', in_use: true },
        { id: 5, shape: 'Vase', in_use: true },
        { id: 6, shape: 'Planter', in_use: true },
        { id: 7, shape: 'Artistic', in_use: true }
      ])
    })
}
