let defaultState = {
  open: false
}
const signupForm = (state=defaultState, action) => {
  switch (action.type) {
    case 'OPEN_SIGNUP_FORM':
      return { open: true }
    case 'CLOSE_SIGNUP_FORM':
      return { open: false }
    default:
      return state
  }
}

export default signupForm
