import axios from 'axios'
import Settings from '../../settings'

export const fetchUser = () => (
  dispatch => {
    const userId = localStorage.getItem('userId')
    axios.get(`${Settings.host}/user/${userId}`).then(
      res => {
        dispatch({ type: 'LOAD_USER', userName: res.data.user.username})
      }
    )
  }
)

export const login = (data, history) => (
  dispatch => {
    axios.post(`${Settings.host}/user/signin`, data).then(
      res => {
        localStorage.setItem('userId', res.data.userId)
        dispatch({ type: 'CLOSE_LOGIN_FORM'})
        history.push('/mine')
      }
    )
  }
)

export const openLoginForm = () => (
  dispatch => {
    dispatch({ type: 'OPEN_LOGIN_FORM'})
  }
)

export const closeLoginForm = () => (
  dispatch => {
    dispatch({ type: 'CLOSE_LOGIN_FORM'})
  }
)
