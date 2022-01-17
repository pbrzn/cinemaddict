import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button } from 'react-bootstrap';
import { Redirect, Route } from 'react-router-dom';
import EditReviewForm from './EditReviewForm';

class Review extends Component {
  render() {
    const belongsToUser = !!(JSON.parse(localStorage.user).username === this.props.username)
    return (
      <div className="review" >
        <h1><b>{this.props.username}</b>{this.props.movieTitle ? <>'s review of <i>{this.props.movieTitle}</i></> : ''}</h1>
        {this.props.moviePoster ? <img src={this.props.moviePoster} alt={this.props.title} /> : <></>}
        <h2>{this.props.title}</h2>
        <h3>Rating: {this.props.rating}/10</h3>
        {this.props.body}
        <br />
        {!!belongsToUser ?
          <>
            <Button variant="outline-dark" onClick={() => <Redirect to={`/reviews/${this.props.id}/edit`} />}>Edit</Button>
            <br />
            <Button variant="outline-dark" onClick={this.props.deleteReview(this.props.id)}>Delete</Button>
          </> : <></>}
          <Route path='/reviews/:id/edit' render={() => <EditReviewForm review={this.props}/>} />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return { deleteReview: id => dispatch({ type: 'DELETE_REVIEW', id: id }) }
}

export default connect(null, mapDispatchToProps)(Review)
