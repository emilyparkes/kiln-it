var _ = require('lodash')

module.exports = {
  prepForDb,
  prepForJS
}

function prepForDb (body) {
  if (_.isObject(body)) {
    const n = {}
    Object.keys(body).forEach(k => (n[_.snakeCase(k)] = prepForDb(body[k])))
    return n
  } else if (_.isArray(body)) body.map(i => prepForDb(i))
  return body
}

function prepForJS (data) {
  if (_.isObject(data)) {
    const n = {}
    Object.keys(data).forEach(k => (n[_.camelCase(k)] = prepForJS(data[k])))
    return n
  } else if (_.isArray(data)) data.map(i => prepForJS(i))
  return data
}

// const dataObj = {
//   clay: 'White',
//   id: 1,
//   date_complete: '2020-07-15T13:45:30',
//   date_created: '2020-06-15T13:45:30',
//   description: 'Creations by emily is great',
//   glaze: 'Black Matte',
//   img_bisque_fired: null,
//   img_complete: '/images/vase.png',
//   img_gallery: null,
//   img_glazed: null,
//   img_leather_hard: null,
//   name: 'Le Vase',
//   note: 'Glaze with criss-cross pattern',
//   shape: 'Vase',
//   status: 'Glazed',
//   weight_bisque_fired: 0,
//   weight_bone_dry: 0,
//   weight_complete: 0,
//   weight_glazed: 0,
//   weight_leather_hard: 0
// }

// prepForJS(dataObj)
