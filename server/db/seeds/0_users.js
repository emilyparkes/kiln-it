const { generateHash } = require('authenticare/server')

exports.seed = async (knex) => {
  await knex('users').del()
  const [adminHash, customerHash] = await Promise.all([generateHash('admin'), generateHash('customer')])
  await knex('users').insert([
    { id: 1, username: 'admin', hash: adminHash, user_type: 'admin' },
    {
      id: 2,
      username: 'customer',
      hash: customerHash,
      user_type: 'customer'
    }
  ])
}
