import request from 'superagent'

const baseUrl = '/api/v1/shapes'

export function getShapes () {
  return request.get(baseUrl).then((resp) => {
    return resp.body.shapes
  })
}

export function addShapes (shapes) {
  return request.post(baseUrl).send(shapes)
    .then((resp) => {
      return resp.body.shapes
    })
}

export function updateShape (id, shape) {
  return request.patch(`${baseUrl}/${id}`).send(shape)
    .then((resp) => {
      return resp.body
    })
}

export function deleteShape (id) {
  return request.delete(`${baseUrl}/${id}`)
    .then((resp) => {
      return resp.body
    })
}
