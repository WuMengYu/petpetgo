import React, { Component } from 'react'
import Header from './Header'
import Main from './Main'
import '../css/App.css'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

import store from '../redux/store'

class App extends Component {
  constructor(){
    super()
  }
  componentWillMount(){
    console.log('componentWillMount', store.getState())
  }
  render() {
    return (
      <Router>
        <div>
          <Header />
          <Main />
        </div>
      </Router>
    );
  }
}

export default App
