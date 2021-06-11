import request from 'superagent'

const baseUrl = '/api/v1/creations'

export function getCreations () {
  return request.get(baseUrl)
    .then((resp) => {
      return resp.body
    })
}

export function addCreation (creation) {
  return request.post(baseUrl).send(creation)
    .then((resp) => {
      return resp.body
    })
}

export function updateCreation (creation) {
  return request.patch(`${baseUrl}/${creation.id}`).send(creation)
    .then(resp => {
      return resp.body
    })
}

export function deleteCreation (id) {
  return request.delete(`${baseUrl}/${id}`)
    .then(resp => {
      return resp.body
    })
}
