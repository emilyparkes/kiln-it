import request from 'superagent'

import { Glaze } from '../../models/Glaze'

const baseUrl = '/api/v1/glazes'

export function fetchGlazes () {
  return request
    .get(baseUrl)
    .then((res) => res.body)
}

export function postGlazes (glazes:Glaze[]) {
  return request
    .post(baseUrl)
    .send(glazes)
    .then((res) => res.body)
}

export function patchGlaze (id:number, glaze:Glaze) {
  return request
    .patch(`${baseUrl}/${id}`)
    .send(glaze)
    .then((res) => res.body)
}

export function delGlaze (id:number) {
  return request
    .delete(`${baseUrl}/${id}`)
    .then((res) => res.body)
}
