export function findString (arr, id, type) {
  const found = arr.find(obj => obj.id === id)
  if (type) {
    return found[type]
  } else {
    return found
  }
}
