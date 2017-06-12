
import { combineReducers } from 'redux'
import bottomList from './bottomListReducer'
import auth from './authReducer'

const rootReducer = combineReducers({
  bottomList,
  auth
})

export default rootReducer
