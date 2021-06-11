import request from 'superagent'

const baseUrl = '/api/v1/statuses'

export function getStatuses () {
  return request.get(baseUrl).then((resp) => {
    return resp.body.statuses
  })
}

export function addStatuses (statuses) {
  return request.post(baseUrl).send(statuses)
    .then((resp) => {
      return resp.body.statuses
    })
}

export function updateStatus (id, status) {
  return request.patch(`${baseUrl}/${id}`).send(status)
    .then((resp) => {
      return resp.body
    })
}

export function deleteStatus (id) {
  return request.delete(`${baseUrl}/${id}`)
    .then((resp) => {
      return resp.body
    })
}
