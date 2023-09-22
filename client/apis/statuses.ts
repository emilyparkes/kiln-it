import request from 'superagent'

import { Status } from '../../models/Status'

const baseUrl = '/api/v1/statuses'

export function fetchStatuses () {
  return request
    .get(baseUrl)
    .then((res) => res.body)
}

export function postStatuses (statuses: Status[]) {
  return request
    .post(baseUrl)
    .send(statuses)
    .then((res) => {
      return res.body
    })
}

export function patchStatus (id:number, status:Status) {
  return request
    .patch(`${baseUrl}/${id}`)
    .send(status)
    .then((res) => res.body)
}

export function delStatus (id:number) {
  return request
    .delete(`${baseUrl}/${id}`)
    .then((res) => res.body)
}
