import _ from 'lodash'

import { Options, DBOptions } from '../models/Options'
import { DBGlaze } from '../models/Glaze'
import { DBClay } from '../models/Clay'
import { DBShape } from '../models/Shape'

// TODO: Do the reverse of all the below pls
export function prepForDb (body: Options) {
  if (_.isObject(body)) {
    const newObj = {}
    Object.keys(body).forEach(key => (newObj[_.snakeCase(key)] = body[key]))
    return newObj
  } else if (_.isArray(body)) body.map(i => prepForDb(i))
  return body
}

// TODO: starting from here is for client-side :) 
// TODO: Retest these functions and edit all models to have client state, snake state and camel state
// prep data for client-side if obj convert as such or if array
// map then convert using all checks/conversions detailed below
export function prepforTS (data: DBOptions | DBOptions[]): DBOptions | DBOptions[] {
  if (isOptionsArray(data)) {
    return data.map((obj: DBOptions) => snakeToCamelwBools(obj))
  } else {
    return snakeToCamelwBools(data)
  }
}

function isOptionsArray(data: DBOptions | DBOptions[]): data is DBOptions[] {
  return _.isArray(data)
}

function snakeToCamelwBools (obj: DBOptions) {
  const newObj = {} as DBOptions
  // each property in the obj is now in arr, for each property in arr camelcase the key = set value from original (snake) obj
  // e.g obj = { in_use: 1 } to obj = { inUse: true }
  Object.keys(obj).forEach(key => newObj[_.camelCase(key) as keyof typeof obj] = obj[key as keyof DBOptions])
  // this converts the bools from number types back to REAL bools
  return makeRealBools(newObj)
}

function makeRealBools (obj: DBOptions) {
  // check that obj has the "in_use" property to convert value to REAL bool
 if (isUseable(obj)) {
  obj.in_use = Boolean(obj.in_use)
 }
 // check that obj has the "underglaze" property to convert value to REAL bool
 if (hasUnderglaze(obj)) {
  obj.underglaze = Boolean(obj.underglaze)
 }
 return obj
}

// obj is of types known, and should return to be one of specific options that include the key 
// e.g DBCreation is an option but does not have "in_use"
function isUseable (obj: DBOptions): obj is DBGlaze | DBClay | DBShape {
  return 'in_use' in obj
}

// same as obove but for diff key
function hasUnderglaze (obj: DBOptions): obj is DBGlaze {
  return 'underglaze' in obj
}

// const dataObj = { 
//   clay: 'White',
//   id: 1,
//   date_complete: '2020-07-15T13:45:30',
//   date_created: '2020-06-15T13:45:30',
//   description: 'Creations by emily is great',
//   glaze: 'Black Matte',
//   img_bisque_fired: null,
//   img_complete: '/images/vase.png',
//   img_gallery: null,
//   img_glazed: null,
//   img_leather_hard: null,
//   name: 'Le Vase',
//   note: 'Glaze with criss-cross pattern',
//   shape: 'Vase',
//   status: 'Glazed',
//   weight_bisque_fired: 0,
//   weight_bone_dry: 0,
//   weight_complete: 0,
//   weight_glazed: 0,
//   weight_leather_hard: 0
// }

// prepForJS(dataObj)
