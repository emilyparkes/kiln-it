import request from 'superagent'

const baseUrl = '/api/v1/all'

export function getAll () {
  return request.get(baseUrl)
    .then((resp) => {
      return resp.body
    })
}
