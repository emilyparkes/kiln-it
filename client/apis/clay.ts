import request from 'superagent'

import { Clay } from '../../models/Clay'

const baseUrl = '/api/v1/clay'

export function getClay () {
  return request
    .get(baseUrl)
    .then((resp) => resp.body.clay)
}

export function addClay (clay:Clay) {
  return request
    .post(baseUrl)
    .send({ clay })
    .then((resp) => resp.body)
}

export function updateClay (id:number, clay:Clay) {
  return request
    .patch(`${baseUrl}/${id}`)
    .send({ clay })
    .then((resp) => resp.body)
}

export function deleteClay (id:number) {
  return request
    .delete(`${baseUrl}/${id}`)
    .then((resp) => resp.body)
}
