import React, { Component } from 'react';
import axios from "axios";
import { connect } from "react-redux";
import '../App/App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Search from '../Search/Search';

export class DisplayItem extends Component {
    render() {
        return (
            <div className="content-container">
            {this.props.movies !== undefined && this.props.movies.map(movies => (
              <div className='displayPics' key={movies.id}>
                <div className='moviePics'>
                <a href={'../Edit'}>
                <img src={movies.poster} alt="Ass. Movies" />
                </a>
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
    };
  };

  export default connect(mapStateToProps)(DisplayItem);
