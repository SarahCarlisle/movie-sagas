import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

class Details extends Component {
    click = (event) => {
        this.props.dispatch({
            type: 'EDIT_MOVIE',
            payload: this.props.movies
        })
        console.log(this.props.movies);
         this.props.history.push('/edit')
    }

    render() {
        return (
            <div>
                <div>
                    <h1> {this.props.review.title} </h1>
                    <p>{this.props.review.description}</p>
                    <img src={this.props.review.poster} alt="Movies"></img>
                </div>
                <button onClick={this.click}>Edit</button>
            </div>
        )
    }
}

const mapReduxStateToProps = (globalStore) => ({
    review: globalStore.review,
    movies: globalStore.movies
});

export default connect(mapReduxStateToProps)(withRouter(Details));