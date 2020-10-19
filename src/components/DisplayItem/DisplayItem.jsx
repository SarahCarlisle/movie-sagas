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

    changeHandler = (event) => {
        this.setState({
            [event.target.name]: event.target.value,
        });
    };

    submitHandler = () => {
        this.props.dispatch({
            type: "GET_MOVIE",
            payload:
                movies: this.state.
        });
        this.setState({
            search: "",
        });
    };

    render() {
        console.log(this.state.movies);
        return (
            <div className="display-movie-div">
            </div>
        );
    }
}

export default connect()(DisplayItem);