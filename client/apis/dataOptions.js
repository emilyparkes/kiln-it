import request from 'superagent'

const baseUrl = '/api/v1'

export function addNewShape (shapes) {
  return request.post(`${baseUrl}/shapes`).send(shapes)
    .then((resp) => {
      return resp.body
    })
}

export function addNewStatus (statuses) {
  return request.post(`${baseUrl}/statuses`).send(statuses)
    .then((resp) => {
      return resp.body
    })
}

export function addNewClay (clay) {
  return request.post(`${baseUrl}/clay`).send(clay)
    .then((resp) => {
      return resp.body
    })
}

export function addNewGlaze (glazes) {
  return request.post(`${baseUrl}/glazes`).send(glazes)
    .then((resp) => {
      return resp.body
    })
}
