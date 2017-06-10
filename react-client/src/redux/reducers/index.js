
import { combineReducers } from 'redux'
import bottomList from './bottomListReducer'
import signUpForm from './signUpFormReducer'

const rootReducer = combineReducers({
  bottomList,
  signUpForm
})

export default rootReducer
