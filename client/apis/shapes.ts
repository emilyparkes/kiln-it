import request from 'superagent'

import { Shape } from '../../models/Shape'

const baseUrl = '/api/v1/shapes'

export function fetchShapes () {
  return request
    .get(baseUrl)
    .then((res) => res.body)
}

export function postShapes (shapes:Shape[]) {
  return request
    .post(baseUrl)
    .send(shapes)
    .then((res) => res.body)
}

export function patchShape (id:number, shape:Shape) {
  return request
    .patch(`${baseUrl}/${id}`)
    .send(shape)
    .then((res) => res.body)
}

export function delShape (id:number) {
  return request
    .delete(`${baseUrl}/${id}`)
    .then((res) => res.body)
}
