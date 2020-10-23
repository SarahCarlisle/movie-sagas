// import React, { useState } from 'react';
// import { connect } from 'react-redux';
// import { withRouter } from 'react-router';

// const Edit = (props) => {
//     const [currentMovie, setMovie] = useState({ 
//         title: props.movies.title, 
//         description: props.movies.description 
//     })

//     const changeHandler = (event) => {
//         setMovie({
//             ...currentMovie,
//             [event.target.name]: event.target.value
//         });
//         console.log(currentMovie);
//     }

//     const saveEdit = () => {
//         props.dispatch({ type: 'EDIT_MOVIE', payload: { 
//             id: props.movies.id, 
//             title: currentMovie.title, 
//             description: currentMovie.description } 
//         });
//         props.history.push(`/details/${props.movie.id}`)
//     }

//     const cancelButton = () => {
//         props.history.push(`/details/${props.movie.id}`)
//     }


//         return (
//             <div> 
//              Edit Title: 
//              <input type="text" onChange={changeHandler} name="title" value={currentMovie.title} required></input>
//              <br />
//              Edit Description:
//              <textarea onChange={changeHandler} name="description" rows="10" cols="50" defaultValue={currentMovie.description}></textarea>
//              <button onClick={saveEdit}>Save</button>
//              <button onClick={cancelButton}>Cancel</button>
//         </div>
//         )
//     }

//     export default connect()(withRouter(Edit));