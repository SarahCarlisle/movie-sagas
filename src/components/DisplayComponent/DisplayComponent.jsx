import React, { Component } from "react";
import { connect } from "react-redux";

class Display extends Component {
    render() {
        return (
            <div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        movies: state.movies,
    };
};

export default connect(mapStateToProps)(Display);
