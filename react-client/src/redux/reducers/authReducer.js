let defaultState = {
  currentUser: ''
}
const auth = (state=defaultState, action) => {
  switch (action.type) {
    case 'LOAD_USER':
      return {...state, currentUser: action.userName }
    default:
      return state
  }
}

export default auth
