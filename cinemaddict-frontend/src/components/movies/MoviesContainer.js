import React, { Component } from 'react';
import MovieStub from './MovieStub';
import Movie from './Movie';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchMovies } from '../actions/fetchMovies';

class MoviesContainer extends Component {

  componentDidMount() {
    this.props.fetchMovies()
  }

  renderMovieStubs = () => this.props.movies.map((movie) => {
    return (
      <div key={movie.id} className="movie-stub">
      <MovieStub movie={movie}/>
      <Route
        path={`${this.props.match.url}/:movieId`}
        render={(routerProps) => <Movie {...routerProps} match={this.props.match} movie={movie}/>}
      />
      </div>
    )
  })

  render(){
    return (
      <div className="movies-container">
        <h1>Movies</h1>
        {this.renderMovieStubs()}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { movies: state.movies }
}

export default connect(mapStateToProps, { fetchMovies })(MoviesContainer)
