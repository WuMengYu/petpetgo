let defaultState = {
  open: false
}
const signUpForm = (state=defaultState, action) => {
  switch (action.type) {
    case 'OPEN_BOTTOM_LIST':
      return { open: true }
    default:
      return state
  }
}

export default signUpForm
