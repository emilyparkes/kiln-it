const { connection } = require("./connection")

module.exports = {
  getStatuses,
  getStatusById,
}

function getStatuses(db = connection) {
  return db("statuses")
}

function getStatusById(id, db = connection) {
  return db("statuses").where("id", id).select().first()
}
