exports.seed = (knex) => {
  return knex('glaze_creations')
    .del()
    .then(() => {
      return knex('glaze_creations').insert([
        { id: 1, glaze_id: 1, creation_id: 1 },
        { id: 2, glaze_id: 10, creation_id: 1 },
        { id: 3, glaze_id: 11, creation_id: 1 },
        { id: 4, glaze_id: 1, creation_id: 2 },
        { id: 5, glaze_id: 10, creation_id: 2 },
        { id: 6, glaze_id: 11, creation_id: 3 },
        { id: 7, glaze_id: 1, creation_id: 3 },
        { id: 8, glaze_id: 6, creation_id: 4 },
        { id: 9, glaze_id: 7, creation_id: 4 },
        { id: 10, glaze_id: 8, creation_id: 6 },
        { id: 11, glaze_id: 9, creation_id: 7 },
        { id: 12, glaze_id: 4, creation_id: 8 },
        { id: 13, glaze_id: 3, creation_id: 9 },
        { id: 14, glaze_id: 3, creation_id: 10 },
        { id: 15, glaze_id: 3, creation_id: 11 },
        { id: 16, glaze_id: 3, creation_id: 12 },

      ])
    })
}