
import { combineReducers } from 'redux'
import bottomList from './bottomListReducer'
import signupForm from './signupFormReducer'
import auth from './authReducer'

const rootReducer = combineReducers({
  bottomList,
  signupForm,
  auth
})

export default rootReducer
