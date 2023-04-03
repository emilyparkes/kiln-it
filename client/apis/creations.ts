import request from 'superagent'

import { Creation } from '../../models/Creation'

const baseUrl = '/api/v1/creations'

export function getCreations() {
  return request
    .get(baseUrl)
    .then((res) => res.body.clay)
}

export function postCreation(newCreation: Creation) {
  return request
    .post(`${baseUrl}/new-creation`)
    .send(newCreation)
    .then((res) => res.body)
}

export function patchCreationStatus(creation: Creation) {
  return request
    .patch(`${baseUrl}/update-creation-status/${creation.id}`)
    .send(creation)
    .then((res) => res.body)
}

export function patchCreation(creation: Creation) {
  return request
    .patch(`${baseUrl}/update-creation/${creation.id}`)
    .send(creation)
    .then((res) => res.body)
}

export function deleteCreation(id:number) {
  return request
    .delete(`${baseUrl}/${id}`)
    .then((res) => res.body)
}
