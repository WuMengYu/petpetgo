import axios from 'axios'
// import { openBottomList } from './botttomListActions'

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
    axios.post('http://petapi.haoduoshipin.com/user/signup', data).then(res => {
      console.log('res.data', res.data)
      localStorage.setItem('userId', res.data.userId)
      history.push('/mine')
      dispatch({ type: 'CLOSE_SIGNUP_FORM'})
    })
  }
)
