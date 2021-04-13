const { generateHash } = require('authenticare/server')

exports.seed = (knex) => {
  return Promise.all([generateHash('admin'), generateHash('customer')])
    .then(([adminHash, customerHash]) =>
      knex('users').insert([
        { id: 1, username: 'admin', hash: adminHash, user_type: 'admin' },
        {
          id: 2,
          username: 'customer',
          hash: customerHash,
          user_type: 'customer'
        }
      ])
    )
}
