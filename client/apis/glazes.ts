import request from 'superagent'

import { Glaze } from '../../models/Glaze'

const baseUrl = '/api/v1/glazes'

export function getGlazes () {
  return request
    .get(baseUrl)
    .then((res) => res.body.glazes)
}

export function addGlazes (glazes:Glaze[]) {
  return request
    .post(baseUrl)
    .send(glazes)
    .then((res) => res.body.glazes)
}

export function updateGlaze (id:number, glaze:Glaze) {
  return request
    .patch(`${baseUrl}/${id}`)
    .send(glaze)
    .then((res) => res.body)
}

export function deleteGlaze (id:number) {
  return request
    .delete(`${baseUrl}/${id}`)
    .then((res) => res.body)
}
