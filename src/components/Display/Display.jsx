import React, { Component } from 'react';
import axios from "axios";
import { connect } from "react-redux";
import '../App/App.css';
import { BrowserRouter as Route } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

import Search from '../Search/Search';
import Details from '../MovieDetails/Details';

export class Display extends Component {
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
    return (
      <div className="content-container">
        {this.props.movies !== undefined && this.props.movies.map(movies => (
          <div className='displayPics' key={movies.id}>
            <div className='moviePics'>
              <ul>
                {this.props.movies.map((view) => {
                  return <Details view={view} />
                })}
              </ul>
              <NavLink to='/details'>
                <img src={movies.poster} alt="Ass. Movies" />
              </NavLink>
            </div>
            <h2>{movies.title}</h2>
            <h5>{movies.description}</h5>
          </div>
        ))}
        <Route path="/Search" component={Search} />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    movies: state.movies,
    genres: state.genres,
  }
};


export default connect(mapStateToProps)(Display);