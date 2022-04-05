import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, Card, Alert } from 'react-bootstrap';
import { deleteReview } from '../../actions/reviewsActions';

class Review extends Component {

  handleOnClick = event => {
    if (event.target.name === "delete") {
      this.props.deleteReview(this.props.id)
      return (<><Alert variant="success">Review Deleted</Alert></>)
    }
  }

  render() {
    const belongsToUser = localStorage.user && !!(JSON.parse(localStorage.user).username === this.props.username) ?  true : false;

    return (
      <div className="review" >
        <Card className="movie-card" style={{ width: '15em' }}>
          <Card.Header>{this.props.username}'s review of <b><i>{this.props.movieTitle}</i></b></Card.Header>
          {this.props.moviePoster ? <Card.Img variant="top" src={this.props.moviePoster} alt={this.props.title} width="10"/> : <></>}
          <Card.Title><h3>{this.props.title}</h3></Card.Title>
          <h4>Rating: {this.props.rating}/10</h4>
          {this.props.body}

          {belongsToUser ?
            <>
              <Button variant="dark" name="edit" href={`/reviews/${this.props.id}/edit`}>Edit</Button>
              <Button variant="dark" className="delete-btn" name="delete" onClick={this.handleOnClick}>Delete</Button>
            </> : <></>}
        </Card>
      </div>
    );
  }
}

export default connect(null, { deleteReview })(Review)
