import React, { Component } from 'react'
import Header from './Header'
import Main from './Main'
import '../css/App.css'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

class App extends Component {
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
