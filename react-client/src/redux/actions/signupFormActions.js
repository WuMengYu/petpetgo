import axios from 'axios'
import Settings from '../../settings'

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

export const signup = (data, history) => (
  dispatch => {
    axios.post(`${Settings.host}/user/signup`, data).then(res => {
      console.log('res.data', res.data)
      localStorage.setItem('userId', res.data.userId)
      history.push('/mine')
      dispatch({ type: 'CLOSE_SIGNUP_FORM'})
    })
  }
)
