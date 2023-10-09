import request from 'superagent'

import { Creation, DBCreation } from '../../models/Creation'

const baseUrl = '/api/v1/creations'

export function fetchCreations(): Promise<Creation[]> {
  return request
    .get(baseUrl)
    .then((res) => res.body)
}

export function postCreation(newCreation: Creation) {
  return request
    .post(`${baseUrl}/new-creation`)
    .send(newCreation)
    .then((res) => res.body)
}

export function patchCreationStatus(creation: DBCreation) {
  return request
    .patch(`${baseUrl}/update-creation-status/${creation.id}`)
    .send(creation)
    .then((res) => res.body)
}

export function patchCreation(creation: DBCreation) {
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
