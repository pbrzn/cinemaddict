import React, { Component } from 'react';
import { Button, ButtonGroup, ToggleButton, Card, Alert } from 'react-bootstrap';
import { connect } from 'react-redux';

class NewReviewForm extends Component {
  state = {
    title: "",
    body: "",
    rating: "",
    movie_id: this.props.movie.id,
    user_id: JSON.parse(localStorage.getItem('user')).id,
    submitted: false
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

  createReview = reviewObject => {
    fetch("http://localhost:3000/api/v1/reviews", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
        "Accept": "application/json",
        "Authorization": `Bearer ${localStorage.getItem('jwt')}`
      },
      body: JSON.stringify(reviewObject)
    })
    .then(resp => resp.json())
    .then(data => {
      this.props.addReview(data);
      const user = JSON.parse(localStorage.getItem('user'));
      user.movies.push(this.props.movie)
      user.reviews.push(data.data.attributes)
      localStorage.setItem('user', JSON.stringify(user))
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
      <ButtonGroup className="mb-2" id={this.props.movie.id}>
        {radios.map((radio, idx) => (
          <ToggleButton
            key={idx}
            id={`${this.props.movie.id}-${idx}`}
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
      <div>
        {!!this.state.submitted ? <></> :
        <form onSubmit={this.handleOnSubmit} >
          <Card style={{ width: '22.25em' }} id="write-review-card">
            <Card.Header><h4><b>Write A Review</b></h4></Card.Header>
            <Card.Text>
              Title: <input type="text" name="title" value={this.state.title} onChange={this.handleOnChange} /><br/>
              Rating: {this.createRadioButtons()}<br/>
              Body: <input type="textarea" name="body" value={this.state.body} onChange={this.handleOnChange} />
              <br/>
              <br/>
              <Button type="submit" variant="outline-dark">Submit</Button><br/>
            </Card.Text>
          </Card>
        </form>}
        {!!this.state.submitted ? <Alert variant="success">Your review has been uploaded!</Alert> : <></>}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    review: {
      title: state.title,
      body: state.body,
      rating: parseInt(state.rating, 10),
      movie_id: state.movie_id,
      user_id: localStorage.currentUserId
    },
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addReview: (reviewObject) => dispatch({ type: 'ADD_REVIEW', review: reviewObject }),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewReviewForm);
