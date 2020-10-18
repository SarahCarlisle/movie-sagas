import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import InputLabel from "@material-ui/core/InputLabel";
import { connect } from "react-redux";

export class DisplayItem extends Component {
    state = {
        movies: "",
    };

    //what does this do?????
    // changeHandler = (event) => {
    //     this.setState({
    //         movies: event.target.value,
    //     });
    // };


    // submit = () => {
    //   this.props.dispatch({
    //     type: "ADD_FAVORITE",
    //     payload: {
    //       movies: this.state.movies,
    //       url: this.props.gif.images.fixed_width.url,
    //     },
    //   });
    // };

    render() {
        console.log(this.state.movies);
        return (
            <div className="display-movie-div">
            </div>
        );
    }
}

export default connect()(DisplayItem);