let defaultState = {
  bottomListopen: false
}
const view = (state=defaultState, action) => {
  switch (action.type) {
    case 'OPEN_BOTTOM_LIST':
      return {...state,  bottomListOpen: true }
    case 'CLOSE_BOTTOM_LIST':
      return {...state,  bottomListOpen: false }
    default:
      return state
  }
}

export default view
