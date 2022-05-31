exports.seed = (knex) => {
  return knex('users')
    .insert([
      { id: 1, email: 'emilycoco@me.com', uid: '', role: 'admin' },
      { id: 2, email: 'keatingkel@gmail.com', uid: '', role: 'whanau' }
    ])
}
