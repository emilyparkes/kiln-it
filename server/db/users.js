const { connection } = require('./connection')

module.exports = {
  createUserRole,
  getUserRole
}

function createUserRole (email, uid, db = connection) {
  return db('users')
    .insert({ email, uid, role: 'whanau' })
}

function getUserRole (uid, db = connection) {
  return db('users')
    .where('uid', uid)
    .select()
    .first()
}
