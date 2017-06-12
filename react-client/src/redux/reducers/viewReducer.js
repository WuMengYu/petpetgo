let defaultState = {
  bottomListOpen: false,
  flashOpen: false,
  flashMsg: ''
}
const view = (state=defaultState, action) => {
  switch (action.type) {
    case 'OPEN_BOTTOM_LIST':
      return {...state,  bottomListOpen: true }
    case 'CLOSE_BOTTOM_LIST':
      return {...state,  bottomListOpen: false }
    case 'FLASH':
      return {...state,  flashOpen: true, flashMsg: action.msg }
    default:
      return state
  }
}

export default view
