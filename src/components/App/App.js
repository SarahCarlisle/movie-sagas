import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

// components
import Display from '../DisplayComponent/DisplayComponent';
import Edit from '../EditPage/Edit';
import Search from '../Search/Search';

class App extends Component {
  // Renders the entire app on the DOM
  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <h1>Movie Club</h1>
            <p>(Like a book club, but for lazy people)</p>
            <nav>
              <ul>
                <li><Link to="/">Show All Movies</Link></li>
                <li><Link to="/Search">Passengers</Link></li>
              </ul>
            </nav>
          </header>

          <div className="content-container">
              <Route exact path="/" component={Display} />
              <Route path="/Edit" component={Edit} />
              <Route path="/Search" component={Search} />
          </div>

        </div>
      </Router>
    );
  }
}

export default App;
