import React, { Component } from 'react';
import axios from "axios";
import { connect } from "react-redux";
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

// components
import Edit from '../EditPage/Edit';
import Search from '../Search/Search';
import Display from '../DisplayItem/DisplayItem';

class App extends Component {
  componentDidMount() {
    this.props.dispatch({
      type: "GET_MOVIES"
    });
  }

  getMovies = () => {
    axios.get("/api/display").then(response => {
      console.log(response.data);
      this.props.dispatch({
        type: "GET_MOVIES",
        payload: response.data,
      });
    }).catch(err => {
      console.log('error in axios get request', err);
    });
  };

  render() {
    console.log (this.props)
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
          <Route exact path="/" component={Display} />
          <Route exact path="/Edit" component={Edit} />
        <Route exact path="/Search" component={Search} />
        </div>
      </Router>
    );
  }
}

export default connect()(App);
