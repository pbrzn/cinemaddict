import React, { Component} from 'react';
import Movie from './Movie';
import { connect } from 'react-redux';
import { fetchMovies } from '../actions/fetchMovies';

class MoviesContainer extends Component {

  componentDidMount() {
    this.props.fetchMovies()
  }

  renderMovies = () => this.props.movies.map((movie) => {
    return <Movie key={movie.id} movie={movie}/>
  })

  render(){
    return (
      <div className="movies-container">
        <h1>Movies</h1>
        {this.renderMovies()}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { movies: state.movies }
}

export default connect(mapStateToProps, { fetchMovies })(MoviesContainer)
