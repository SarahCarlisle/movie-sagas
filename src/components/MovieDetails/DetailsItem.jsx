import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';


class DetailsItem extends Component {

    click = (event) => {
        this.props.dispatch({
            type: 'VIEW_MOVIE',
            payload: this.props.view
        })
        console.log(this.props.view);
         this.props.history.push('/details')
    }
    render() {
        return (
            <>

                <div>
                     <li>{this.props.view.title} <img src={this.props.view.poster}></img><button onClick={this.click}>Read More</button></li>
                </div>
            </>
        )
    }

}
const mapStateToProps = (state) => {
    return {
      movies: state.movies,
      genres: state.genres,
    }
  };

export default connect(mapReduxStateToProps)(withRouter(DetailsItem));