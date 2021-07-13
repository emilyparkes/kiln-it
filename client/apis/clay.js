import request from 'superagent'

const baseUrl = '/api/v1/clay'

export function getClay () {
  return request.get(baseUrl).then((resp) => {
    return resp.body.clay
  })
}

export function addClay (clay) {
  return request.post(baseUrl).send({ clay })
    .then((resp) => {
      return resp.body
    })
}

export function updateClay (id, clay) {
  return request.patch(`${baseUrl}/${id}`).send({ clay })
    .then((resp) => {
      return resp.body
    })
}

export function deleteClay (id) {
  return request.delete(`${baseUrl}/${id}`)
    .then((resp) => {
      return resp.body
    })
}
