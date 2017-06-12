let defaultState = {
  currentUser: '',
  loginFormOpen: false
}
const auth = (state=defaultState, action) => {
  switch (action.type) {
    case 'LOAD_USER':
      return {...state, currentUser: action.userName }
    case 'OPEN_LOGIN_FORM':
      return {...state, loginFormOpen: true}
    case 'CLOSE_LOGIN_FORM':
      return {...state, loginFormOpen: false}
    default:
      return state
  }
}

export default auth
