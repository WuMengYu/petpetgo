import axios from 'axios'

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

export const signup = (data, history, close) => (
  dispatch => {
    axios.post('http://petapi.haoduoshipin.com/user/signup', data).then(res => {
      console.log('res.data', res.data)
      history.push('/mine')
      close()
    })
  }
)
