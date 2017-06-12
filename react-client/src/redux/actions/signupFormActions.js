
export const openSignupForm = () => (
  dispatch => {
    dispatch({ type: 'OPEN_SIGNUP_FORM'})
  }
)
export const closeSignupForm = () => (
  dispatch => {
    dispatch({ type: 'CLOSE_SIGNUP_FORM'})
  }
)
