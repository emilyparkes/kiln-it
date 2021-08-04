exports.seed = (knex) => {
  return knex('glazes')
    .then(() => {
      return knex('glazes').insert([
        { id: 1, glaze: 'Clear', in_use: true },
        { id: 2, glaze: 'White Matte', in_use: true },
        { id: 3, glaze: 'White Glossy', in_use: true },
        { id: 4, glaze: 'Black Matte', in_use: true },
        { id: 5, glaze: 'Black Glossy', in_use: true },
        { id: 6, glaze: 'Haystack', in_use: true },
        { id: 7, glaze: 'Astronaut', in_use: true },
        { id: 8, glaze: 'Green Forrest', in_use: true }
      ])
    })
}
