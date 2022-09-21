import request from 'superagent'

const baseUrl = '/api/v1/creations'

export function getCreations() {
  return request.get(baseUrl).then((resp) => {
    return resp.body
  })
}

export function postCreation(newCreation) {
  return request
    .post(`${baseUrl}/new-creation`)
    .send(newCreation)
    .then((resp) => {
      return resp.body
    })
}

export function patchCreationStatus(creation) {
  return request
    .patch(`${baseUrl}/update-creation-status/${creation.id}`)
    .send(creation)
    .then((resp) => {
      return resp.body
    })
}

export function patchCreation(creation) {
  return request
    .patch(`${baseUrl}/update-creation/${creation.id}`)
    .send(creation)
    .then((resp) => {
      return resp.body
    })
}

export function deleteCreation(id) {
  return request.delete(`${baseUrl}/${id}`).then((resp) => {
    return resp.body
  })
}
