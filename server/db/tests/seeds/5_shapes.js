exports.seed = (knex) => {
  return knex('shapes').insert([
    { id: 1, shape: 'Coffee Cup' },
    { id: 2, shape: 'Plate' },
    { id: 3, shape: 'Bowl' },
    { id: 4, shape: 'Paint Palette' },
    { id: 5, shape: 'Vase' },
    { id: 6, shape: 'Planter' },
    { id: 7, shape: 'Artistic' }
  ])
}
