import request from 'superagent'

const baseUrl = '/api/v1/statuses'

export function getStatuses () {
  return request.get(baseUrl).then((resp) => {
    return resp.body.statuses
  })
}

export function addNewStatus (statuses) {
  return request.post(baseUrl).send(statuses)
    .then((resp) => {
      return resp.body
    })
}
