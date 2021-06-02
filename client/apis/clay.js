import request from 'superagent'

const baseUrl = '/api/v1/clay'

export function getClay () {
  return request.get(baseUrl).then((resp) => {
    return resp.body.clay
  })
}

export function addNewClay (clay) {
  return request.post(baseUrl).send(clay)
    .then((resp) => {
      return resp.body
    })
}
