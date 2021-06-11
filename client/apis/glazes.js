import request from 'superagent'

const baseUrl = '/api/v1/glazes'

export function getGlazes () {
  return request.get(baseUrl).then((resp) => {
    return resp.body.glazes
  })
}

export function addGlazes (glazes) {
  return request.post(baseUrl).send(glazes)
    .then((resp) => {
      console.log('api: ', resp.body)
      return resp.body.glazes
    })
}

export function updateGlaze (id, glaze) {
  return request.patch(`${baseUrl}/${id}`).send(glaze)
    .then((resp) => {
      return resp.body
    })
}

export function deleteGlaze (id) {
  return request.delete(`${baseUrl}/${id}`)
    .then((resp) => {
      return resp.body
    })
}
