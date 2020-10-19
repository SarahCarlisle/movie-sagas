import React, { Component } from 'react'

export class Edit extends Component {
    render() {
//         const {
//             feeling,
//         } = this.props.feedback;

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
//             <div className="content">
//             <form onSubmit={this.onSubmit}>
//                     <table>
//                         <thead>
//                             <tr>
//                                 <th>Feedback Type</th>
//                                 <th>Value</th>
//                             </tr>
//                         </thead>
//                         <tbody>
//                             <tr>
//                                 <td>Feeling?</td>
//                                 <td>{feeling}</td>
//                             </tr>
//                             <tr>
//                                 <td>Content?</td>
//                                 <td>{understanding}</td>
//                             </tr>
//                             <tr>
//                                 <td>Support?</td>
//                                 <td>{support}</td>
//                             </tr>
//                         </tbody>
//                     </table>
//                 <br/>
//                 <button type="submit">Submit Feedback</button>
//                 </form>
//                 </div>
//         )
//     }

// //mapping the information to the database.sql
// const mapStateToProps = (state) => {
//     return {
//         feedback: state.feedback
//     }
// }

export default connect(mapStateToProps)(Edit);