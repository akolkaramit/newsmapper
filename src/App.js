import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// ****************************************************************************
// ********************************File Imports********************************
// ****************************************************************************
import './App.css';
import Contact from './Contact/Contact.js';
import About from './About/About.js';
import Home from './Home/Home.js';
import Header from './Header/Header.js';


class App extends Component {
  render() {
    return (
      <Router>
        <div className="App container-fluid">
          <Header />
          <Switch>
            <Route exact path='/' component={Home}></Route>
            <Route exact path='/about' component={About}></Route>
            <Route exact path='/contact' component={Contact}></Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
// https://medium.com/@lavitr01051977/basic-react-redux-app-with-async-call-to-api-e478e6e0c48b
