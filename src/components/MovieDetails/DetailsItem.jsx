import React, {Component} from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router';

class DisplayItem extends Component {

    click = (event) => {
        console.log(this.props.review);
        this.props.dispatch({
            type: 'REVIEW_MOVIE',
            payload: this.props.review
        })
        this.props.history.push('/details')
    }

    render(){
        return(
            <>

            <div>
                <li>{this.props.review.title} <img src={this.props.review.poster}></img>
                <button onClick={this.click}>More Information</button></li>
            </div>
            </>
        )
    }
}

const mapReduxStateToProps = (globalStore) => ({
    movies: globalStore.movies
});

export default connect(mapReduxStateToProps)(withRouter(DisplayItem));