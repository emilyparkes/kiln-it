import request from 'superagent'

const baseUrl = '/api/v1/glazes'

export function getGlazes () {
  return request.get(baseUrl).then((resp) => {
    return resp.body.glazes
  })
}

export function addNewGlaze (glazes) {
  return request.post(baseUrl).send(glazes)
    .then((resp) => {
      return resp.body
    })
}
