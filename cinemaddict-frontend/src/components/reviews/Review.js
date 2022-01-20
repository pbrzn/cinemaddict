import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, Card } from 'react-bootstrap';
import { Link, Route, Switch } from 'react-router-dom';
import EditReviewForm from './EditReviewForm';
import { deleteReview } from '../actions/reviewsActions';

class Review extends Component {

  handleOnClick = event => {
    if (event.target.name === "delete") {
      this.props.deleteReview(this.props.id)
    }
  }

  render() {
    const belongsToUser = !!(JSON.parse(localStorage.user).username === this.props.username);

    return (
      <div className="review" >
        <Card style={{ width: '15em' }}>
          <Card.Header>{this.props.username}'s review of <b><i>{this.props.movieTitle}</i></b></Card.Header>
          {this.props.moviePoster ? <Card.Img variant="top" src={this.props.moviePoster} alt={this.props.title} width="10"/> : <></>}
          <Card.Title><h3>{this.props.title}</h3></Card.Title>
          <h4>Rating: {this.props.rating}/10</h4>
          {this.props.body}

          {!!belongsToUser ?
            <>
              <Button variant="outline-dark" name="edit" href={`/reviews/${this.props.id}/edit`}>Edit</Button>
              <Button variant="outline-dark" name="delete" onClick={this.handleOnClick}>Delete</Button>
            </> : <></>}
        </Card>
      </div>
    );
  }
}

export default connect(null, { deleteReview })(Review)
