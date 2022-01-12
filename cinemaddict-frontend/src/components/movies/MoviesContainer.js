import React, { Component } from 'react';
import Movie from './Movie';
import { Route, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchMovies } from '../actions/fetchMovies';

class MoviesContainer extends Component {

  componentDidMount() {
    this.props.fetchMovies()
  }

  renderMovieStubs = () => this.props.movies.map(movie => {
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
        <h1>Movies</h1>
        <ul>
          {this.renderMovieStubs()}
        </ul>
      {/*<Route path={`${this.props.match.url}/:movieId`} >
        <Movie movies={this.props.movies} authed={true}/>
      </Route>*/}

        <Route
          path={`${this.props.match.url}/:movieId`}
          render={(routerProps) => <Movie {...routerProps} movies={this.props.movies} />}
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { movies: state.movies }
}

export default connect(mapStateToProps, { fetchMovies })(MoviesContainer)
