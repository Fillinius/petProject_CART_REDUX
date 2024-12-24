export function favoriteCreater(id) {
  return {
    type: 'FAVORITEPRODUCT',
    payload: { id },
  }
}
export function decrementCountCreater(id) {
  return {
    type: 'DECREMENTPRODUCT',
    payload: { id },
  }
}
export function incrementCountCreater(id) {
  return {
    type: 'INCREMENTPRODUCT',
    payload: { id },
  }
}
