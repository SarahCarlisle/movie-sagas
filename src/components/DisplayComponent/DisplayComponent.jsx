import React, { Component } from "react";
import { connect } from "react-redux";

export class Display extends Component {
    render() {
        return (
            <div>  className="display-movie">

            </div>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        search: state.moviesReducer,
        favorite: state.genresReducer,
    };
};

export default connect(mapStateToProps)(Display);
