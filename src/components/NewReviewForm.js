import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import { connect } from 'react-redux';

class NewReviewForm extends Component {
  state = {
    title: "",
    body: "",
    rating: "",
  }

  handleOnChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleOnSubmit = event => {
    event.preventDefault();
    this.createReview({ review: this.state });
    this.setState({
      title: "",
      body: "",
      rating: "",
    })
  }

  createUser = userObject => {
    this.props.startReviewRequest();
    fetch("http://localhost:3000/api/v1/reviews", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
        "Accept": "application/json",
      },
      body: JSON.stringify(reviewObject)
    })
    .then(resp => resp.json())
    .then(data => {
      this.props.addReview(data);
    })
  }

  createRadioButtons = () => {
    let counter = 0
    while (counter < 10) {
      counter ++;
      return <input type="radio" name="rating" value={counter}>{counter}</input>
    }
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleOnSubmit} >
          Title: <input type="text" name="username" onChange={this.handleOnChange} /><br/>
          Rating: {this.createRadioButtons()}
          Body: <input type="textarea" name="bio" onChange={this.handleOnChange} /><br/>
          <Button type="submit" variant="outline-dark">Submit</Button>
        </form>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    review: {
      title: state.title,
      body: state.body,
      rating: state.rating,
      movie: state.movie,
      user: state.user
    }
  }
}

const mapDispatchToProps = dispatch => {
  return {
    startReviewRequest: () => dispatch({ type: 'START_ADD_REVIEW_REQUEST' }),
    addReview: (reviewObject) => dispatch({ type: 'ADD_REVIEW', reviewObject }),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewUserForm);
