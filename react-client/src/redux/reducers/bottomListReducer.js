let defaultState = {
  open: false
}
const bottomList = (state=defaultState, action) => {
  switch (action.type) {
    case 'OPEN_BOTTOM_LIST':
      return { open: true }
    case 'CLOSE_BOTTOM_LIST':
      return { open: false }
    default:
      return state
  }
}

export default bottomList
