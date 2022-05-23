export function findString (arr, property, value, type) {
  const found = arr.find(obj => obj[property] === value)
  if (type) {
    return found[type]
  } else {
    return found
  }
}

function capitalise (str) {
  return str.charAt(0).toUpperCase() + str.slice(1)
}

// le-vase => Le Vase
export function toCapSpace (name) {
  return name.split('-').map(capitalise).join(' ')
}

// Le Vase => le-vase
export function toLowHyphen (name) {
  return name.toLowerCase().split(' ').join('-')
}

export function filterBy (filters, itemsToFilter) {
  return itemsToFilter === null
    ? null
    : itemsToFilter.filter(creation => {
      let isFilterOption = true
      for (let key in filters) {
        if (!filters[key].includes(creation[key])) isFilterOption = false
      }
      return isFilterOption
    })
}
