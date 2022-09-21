exports.seed = (knex) => {
  return knex('glazes')
    .then(() => {
      return knex('glazes').insert([
        { id: 1, glaze: 'Clear', underglaze: false, in_use: true },
        { id: 2, glaze: 'White Matte', underglaze: false, in_use: true },
        { id: 3, glaze: 'White Glossy', underglaze: false, in_use: true },
        { id: 4, glaze: 'Black Matte', underglaze: false, in_use: true },
        { id: 5, glaze: 'Black Glossy', underglaze: false, in_use: true },
        { id: 6, glaze: 'Haystack', underglaze: false, in_use: true },
        { id: 7, glaze: 'Astronaut', underglaze: false, in_use: true },
        { id: 8, glaze: 'Green Forrest', underglaze: false, in_use: true },
        { id: 9, glaze: 'Black', underglaze: true, in_use: true },
        { id: 10, glaze: 'White', underglaze: true, in_use: true },
        { id: 11, glaze: 'Peach', underglaze: true, in_use: true },
      ])
    })
}
