
import { combineReducers } from 'redux'
import bottomList from './bottomListReducer'
import signupForm from './signupFormReducer'

const rootReducer = combineReducers({
  bottomList,
  signupForm
})

export default rootReducer
