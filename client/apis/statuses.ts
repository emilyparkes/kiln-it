import request from 'superagent'

import { Status } from '../../models/Status'

const baseUrl = '/api/v1/statuses'

export function getStatuses () {
  return request
    .get(baseUrl)
    .then((res) => res.body.statuses)
}

export function addStatuses (statuses: Status[]) {
  return request
    .post(baseUrl)
    .send(statuses)
    .then((res) => {
      return res.body.statuses
    })
}

export function updateStatus (id:number, status:Status) {
  return request
    .patch(`${baseUrl}/${id}`)
    .send(status)
    .then((res) => res.body)
}

export function deleteStatus (id:number) {
  return request
    .delete(`${baseUrl}/${id}`)
    .then((res) => res.body)
}
