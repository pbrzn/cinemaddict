import React, { Component } from 'react';
import MoviesList from './MoviesList';
import Movie from './Movie';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchMovies } from '../actions/fetchMovies';

class MoviesContainer extends Component {

  componentDidMount() {
    this.props.fetchMovies()
  }

  render(){
    return (
      <>
        <Switch>
          <Route exact path="/movies" render={(routerProps) => <MoviesList {...routerProps} movies={this.props.movies} />}/>
          <Route
            path={`${this.props.match.url}/:movieId`}
            render={(routerProps) => <Movie {...routerProps} movies={this.props.movies} />}
          />
        </Switch>
      </>
    );
  }
}

const mapStateToProps = state => {
  return { movies: state.movies }
}

export default connect(mapStateToProps, { fetchMovies })(MoviesContainer)
