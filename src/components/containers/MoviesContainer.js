import React, { Component} from 'react';
import { connect } from 'react-redux';

class MoviesContainer extends Component {

  movies = this.props.map(movie => <li><Movie key={movie.id} props={movie}/></li>)

  render(){
    return (
      <div>
        <h1>Movies</h1>
        <ul>
          {this.movies}
        </ul>
      </div>
    );
  }
}

export default MoviesContainer
