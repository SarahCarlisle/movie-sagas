import React, { Component } from 'react';
import axios from "axios";
import { connect } from "react-redux";
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

// components
import Edit from '../EditPage/Edit';
import Search from '../Search/Search';

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

          <div className="content-container">
            {this.props.movies !== undefined && this.props.movies.map(movies => (
              <div className='displayPics' key={movies.id}>
                <div className='moviePics'>
                <img src={movies.poster} alt="Ass. Movies"/>
                </div>
                <h2>{movies.title}</h2>
                <h5>{movies.description}</h5>
              </div>
            ))}
            <Route path="/Search" component={Search} />
          </div>

        </div>
      </Router>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    movies: state.movies,
    genres: state.genres,
  };
};

export default connect(mapStateToProps)(App);
