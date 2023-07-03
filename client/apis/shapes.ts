import request from 'superagent'

import { Shape } from '../../models/Shape'

const baseUrl = '/api/v1/shapes'

export function getShapes () {
  return request
    .get(baseUrl)
    .then((res) => res.body.shapes)
}

export function addShapes (shapes:Shape[]) {
  return request
    .post(baseUrl)
    .send(shapes)
    .then((res) => res.body.shapes)
}

export function updateShape (id:number, shape:Shape) {
  return request
    .patch(`${baseUrl}/${id}`)
    .send(shape)
    .then((res) => res.body)
}

export function deleteShape (id:number) {
  return request
    .delete(`${baseUrl}/${id}`)
    .then((res) => res.body)
}
