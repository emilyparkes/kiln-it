exports.seed = async (knex) => {
  await knex('statuses').del()
  await knex('statuses').insert([
    { id: 1, status: 'Wet' },
    { id: 2, status: 'Leather Hard' },
    { id: 3, status: 'Bone Dry' },
    { id: 4, status: 'Bisque Firing' },
    { id: 5, status: 'Bisque Fired' },
    { id: 6, status: 'Glazed' },
    { id: 7, status: 'Glaze Firing' },
    { id: 8, status: 'Complete' }
  ])
}
