import _ from 'lodash'

export function findString(arr, property, value, type?) {
  const found = arr.find((obj) => obj[property] === value)
  if (type) {
    return found[type]
  } else {
    return found
  }
}

function capitalise(str) {
  return str.charAt(0).toUpperCase() + str.slice(1)
}

// le-vase => Le Vase
export function toCapSpace(name) {
  return name.split('-').map(capitalise).join(' ')
}

// Le Vase => le-vase
export function toLowHyphen(name) {
  return name.toLowerCase().split(' ').join('-')
}

// Le Vase => leVase
export function toCamelCase(name) {
  name = name.toLowerCase()
  return _.camelCase(name)
}

export function filterBy(filters, itemsToFilter) {
  return itemsToFilter === null
    ? null
    : itemsToFilter.filter((creation) => {
        let isFilterOption = true
        for (const key in filters) {
          if (!filters[key].includes(creation[key])) isFilterOption = false
        }
        return isFilterOption
      })
}

export function searchBy(searchterm, itemsToSearch) {
  searchterm = searchterm.toLowerCase()
  const searchResults = itemsToSearch.filter((item) => {
    
    const glazeValues = item.glazes.map((glazeObj) => glazeObj.glaze)
    const creationValues = Object.values(item)

    let stringValues = [...glazeValues, ...creationValues]

    stringValues = stringValues
      .filter((value) => typeof value === 'string')
      .map((value) => value.toLowerCase())
      .join(' ')

    let found = false
    if (stringValues.includes(searchterm)) found = true
    return found
  })
  return searchResults
}

export function cleanForm(formState) {
  formState.clayId = formState.clay.id
  formState.shapeId = formState.shape.id
  formState.statusId = formState.status.id
  delete formState.clay
  delete formState.shape
  delete formState.status
  return formState
}

export function cleanGlazes(glazesState) {
  return glazesState.map((selected) => {
    if (selected.in_use) {
      delete selected.in_use
      delete selected.underglaze
    }
    return selected
  })
}

export function validateForm(formState) {
  const errors = {}
  if (!formState.name) {
    errors.nameInput = true
  }
  if (!formState.shape) {
    errors.shapeInput = true
  }
  if (!formState.status) {
    errors.statusInput = true
  }
  if (!formState.clay) {
    errors.clayInput = true
  }
  return Object.keys(errors).length ? errors : null
}
