import React, { Component } from 'react';
import Movie from './Movie';
import { Route, Link } from 'react-router-dom';

class MoviesList extends Component {

  renderMovieLinks = () => this.props.movies.map(movie => {
    let movieId = movie.id;
    return (
      <li key={movie.id}>
        <Link to={`/movies/${movieId}`} ><h2>{movie.attributes.title}</h2></Link>
      </li>
    )
  })

  render(){
    return (
      <div className="movies-container">
        <h1 className="page-title">All Movies</h1>
        <ul>
          {this.renderMovieLinks()}
        </ul>

        <Route
          path={`${this.props.match.url}/:movieId`}
          render={(routerProps) => <Movie {...routerProps} movies={this.props.movies} />}
        />
      </div>
    );
  }
}

export default MoviesList
