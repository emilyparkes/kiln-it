exports.seed = knex => {
  return knex('shapes').del()
    .then(() => {
      return knex('shapes').insert([
        { id: 1, shape_type: 'Coffee Cup' },
        { id: 2, shape_type: 'Plate' },
        { id: 3, shape_type: 'Bowl' },
        { id: 4, shape_type: 'Paint Palette' },
        { id: 5, shape_type: 'Vase' },
        { id: 6, shape_type: 'Planter' },
        { id: 7, shape_type: 'Artistic' }
      ])
    })
}
