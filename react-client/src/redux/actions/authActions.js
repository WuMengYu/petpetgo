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
