const { connection } = require("./connection")

module.exports = {
  getCreations,
  getCreationById,
}

function getCreations(db = connection) {
  return db("creations")
    .join("clay", "clay.id", "creations.clay")
    .join("glazes", "glazes.id", "creations.glaze")
    .join("shapes", "shapes.id", "creations.shape")
    .join("statuses", "statuses.id", "creations.status")
    .select(
      "creations.id as creationId",
      "clay.clay as clay",
      "glazes.glaze as glaze",
      "shapes.shape_type as shape",
      "statuses.status as status",
      "weight_wet",
      "weight_leather_hard",
      "weight_bone_dry",
      "weight_bisque",
      "weight_glaze",
      "weight_complete",
      "date_created",
      "date_complete",
      "note"
    )
}

function getCreationById(id, db = connection) {
  return db("creations").where("id", id).select().first()
}
