import React, { Component} from 'react';
import Movie from '../Movie';
import { connect } from 'react-redux';

class MoviesContainer extends Component {

  componentDidMount() {
    this.props.startFetchingMovies();
    fetch("http://localhost:3000/api/v1/movies")
    .then(resp => resp.json())
    .then(data => {
      this.props.fetchMovies(data)
      this.renderMovies(data)
    });
  }

  renderMovies = movies => movies.map(movie => {
    return (
      <li><Movie key={movie.id} props={movie}/></li>
    )
  })

  render(){
    return (
      <div>
        <h1>Movies</h1>
        <ul>
          {this.renderMovies}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { movies: state.movies }
}

const mapDispatchToProps = dispatch => {
  return {
    startFetchingMovies: () => dispatch({ type: 'START_FETCHING_MOVIES' }),
    fetchMovies: (data) => dispatch({ type: 'FETCH_MOVIES', movies: data })
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MoviesContainer)
