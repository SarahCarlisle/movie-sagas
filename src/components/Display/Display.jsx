import React, {Component} from 'react';
import {connect} from 'react-redux';
import DetailsItem from '../MovieDetails/DetailsItem';

class Display extends Component {

    componentDidMount() {
        this.props.dispatch({
            type:'GET_MOVIES'
        })
    }

    render(){
        return(
            <div>
                <ul>
                    {this.props.movies.map((review) => {
                        return <DetailsItem review={review} />
                    })}
                </ul>
            </div>
        )
    }
}

const mapReduxStateToProps = (globalStore) => ({
    movies: globalStore.movies
});

export default connect(mapReduxStateToProps)(Display);