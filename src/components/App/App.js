import React, { Component } from 'react';
import { connect } from "react-redux";
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

// components
import Display from '../Display/Display';
import Details from '../MovieDetails/Details';
import Edit from '../EditPage/Edit';


class App extends Component {
  render() {
    console.log(this.props)
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <h1>Movie Club</h1>
            <p>(Like a book club, but for lazy people)</p>
            <nav>
              <ul>
                <li><Link to="/">Show All Movies</Link></li>
                <li><Link to="/Search">Search</Link></li>
              </ul>
            </nav>
          </header>
        </div>
        <Route exact path='/'>
          <Display />
        </Route>
        <Route exact path='/details'>
          <Details />
        </Route>
        <Route exact path='/edit'>
          <Edit />
        </Route>
      </Router>
    );
  }
}

export default connect()(App);
