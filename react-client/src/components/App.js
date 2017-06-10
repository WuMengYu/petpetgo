import React, { Component } from 'react'
import Header from './Header'
import Main from './Main'
import BottomList from './BottomList'
import SignupForm from './SignupForm'
import '../css/App.css'
import {
  BrowserRouter as Router
} from 'react-router-dom'

import {  Provider } from 'react-redux'
import store from '../redux/store'

class App extends Component {

  render() {
    return (
      <Provider store={store}>
        <Router>
          <div>
            <Header />
            <Main />
            <SignupForm />
            <BottomList />
          </div>
        </Router>
      </Provider>
    )
  }
}

export default App
