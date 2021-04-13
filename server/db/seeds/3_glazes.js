exports.seed = (knex) => {
  return knex('glazes').insert([
    { id: 1, glaze: 'Clear' },
    { id: 2, glaze: 'White Matte' },
    { id: 3, glaze: 'White Glossy' },
    { id: 4, glaze: 'Black Matte' },
    { id: 5, glaze: 'Black Glossy' },
    { id: 6, glaze: 'Haystack' },
    { id: 7, glaze: 'Astronaut' },
    { id: 8, glaze: 'Green Forrest' }
  ])
}
