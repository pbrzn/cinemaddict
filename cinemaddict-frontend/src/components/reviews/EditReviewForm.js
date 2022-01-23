import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Button, ButtonGroup, ToggleButton, Card, Alert } from 'react-bootstrap';
import { compose } from 'redux';
import { connect } from 'react-redux';

class EditReviewForm extends Component {
  state = {
    id: parseInt(this.props.match.params.id, 10),
    title: "",
    body: "",
    rating: "",
    movie_id: "",
    user_id: "",
    movie_title: "",
    submitted: false
  }

  componentDidMount() {
    const id = this.props.match.params.id;
    fetch(`http://localhost:3000/api/v1/reviews/${id}`, {
      method: "GET",
      headers: {
        "Content-type": "application/json",
        "Accept": "application/json",
        "Authorization": `Bearer ${localStorage.jwt}`
      }
    })
    .then(resp => resp.json())
    .then(data => {
      this.setState({
        title: data.data.attributes.title,
        body: data.data.attributes.body,
        rating: data.data.attributes.rating,
        movie_id: data.data.attributes.movie_id,
        movieTitle: data.data.attributes.movie.title,
        user_id: data.data.attributes.user_id
      })
    })
  }

  handleOnChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleOnSubmit = event => {
    event.preventDefault();
    this.editReview({
      review: {
        id: this.state.id,
        title: this.state.title,
        body: this.state.body,
        rating: parseInt(this.state.rating, 10),
        movie_id: this.state.movie_id,
        user_id: this.state.user_id
      }
    });
  }

  editReview = reviewObject => {
    const id = this.props.match.params.id;
    fetch(`http://localhost:3000/api/v1/reviews/${id}`, {
      method: "PATCH",
      headers: {
        "Content-type": "application/json",
        "Accept": "application/json",
        "Authorization": `Bearer ${localStorage.jwt}`
      },
      body: JSON.stringify(reviewObject)
    })
    .then(resp => resp.json())
    .then(data => {
      this.props.updateReview(data);
      this.setState({
        submitted: true
      })
    })
  }

  createRadioButtons = () => {
    const radios = [
      { name: '1', value: '1' },
      { name: '2', value: '2' },
      { name: '3', value: '3' },
      { name: '4', value: '4' },
      { name: '5', value: '5' },
      { name: '6', value: '6' },
      { name: '7', value: '7' },
      { name: '8', value: '8' },
      { name: '9', value: '9' },
      { name: '10', value: '10' }
    ]

    return (
      <ButtonGroup className="mb-2" id={this.state.movie_id}>
        {radios.map((radio, idx) => (
          <ToggleButton
            key={idx}
            id={`${this.state.movie_id}-${idx}`}
            type="radio"
            variant="secondary"
            name="rating"
            value={radio.value}
            onChange={this.handleOnChange}
          >
            {radio.name}
          </ToggleButton>
        ))}
      </ButtonGroup>
    )
  }

  render() {
    return (
      <div id="edit-review">
        <h1 className="page-title">Edit Your Review of <i>{this.state.movieTitle}</i></h1>
        <form onSubmit={this.handleOnSubmit} >
          <Card style={{ width: '22.25em' }} id="edit-review-card">
            <Card.Text>
              Title: <input type="text" name="title" value={this.state.title} placeholder={this.state.title} onChange={this.handleOnChange} /><br/>
              <b>Your Rating: {this.state.rating}/10</b><br/>
              Change Rating: {this.createRadioButtons()}<br/>
              Body: <input type="textarea" name="body" value={this.state.body} placeholder={this.state.body} onChange={this.handleOnChange} />
              <br/>
              <br/>
              <Button type="submit" variant="outline-dark">Submit</Button>
            </Card.Text>
          </Card>
        </form>
        {!!this.state.submitted ? <Alert variant="success">Your review has been updated!</Alert> : <></>}
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    updateReview: (reviewObject) => dispatch({ type: 'UPDATE_REVIEW', review: reviewObject }),
  }
}

export default compose(withRouter, connect(null, mapDispatchToProps))(EditReviewForm);
