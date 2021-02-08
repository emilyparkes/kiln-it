import request from 'superagent'

const baseUrl = '/api/v1/creations'

export async function getCreations () {
  const { body } = await request.get(baseUrl)
  return body
}

export async function getCreationById (id) {
  const { body } = await request.get(`${baseUrl}/${id}`)
  return body
}
