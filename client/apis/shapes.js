import request from 'superagent'

const baseUrl = '/api/v1/shapes'

export function getShapes () {
  return request.get(baseUrl).then((resp) => {
    return resp.body.shapes
  })
}

export function addNewShape (shapes) {
  return request.post(baseUrl).send(shapes)
    .then((resp) => {
      return resp.body
    })
}
