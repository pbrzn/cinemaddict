import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';
import { connect } from 'react-redux';

class EditReviewForm extends Component {
  state = {
    id: this.props.review.id || this.props.id,
    title: this.props.review.title || this.props.review.title,
    body: this.props.review.body || this.props.review.body,
    rating: this.props.review.rating || this.props.review.rating,
    movie_id: this.props.review.movie_id || this.props.review.movie_id,
    user_id: localStorage.currentUserId
  }

  componentDidMount() {
    fetch(`http://localhost:3000/api/v1/reviews/${this.props.review.id}`, {
      method: "GET",
      headers: {
        "Content-type": "application/json",
        "Accept": "application/json",
        "Authorization": `Bearer ${localStorage.jwt}`
      }
    })
    .then(resp => resp.json())
    .then(data => {
      console.log(data)
    })
  }

  handleOnChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleOnSubmit = event => {
    event.preventDefault();
    this.editReview({ review: this.state });
  }

  editReview = reviewObject => {
    console.log(reviewObject)
    fetch(`http://localhost:3000/api/v1/reviews/${this.props.review.id}`, {
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
      console.log(data);
      this.props.updateReview(data);
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
      <ButtonGroup className="mb-2" id={this.props.review.movie_id}>
        {radios.map((radio, idx) => (
          <ToggleButton
            key={idx}
            id={`${this.props.review.movie_id}-${idx}`}
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
    debugger;
    return (
      <div>
        <form onSubmit={this.handleOnSubmit} >
          Title: <input type="text" name="title" value={this.state.title} placeholder={this.props.review.title} onChange={this.handleOnChange} /><br/>
          Rating: {this.createRadioButtons()}<br/>
          Body: <input type="textarea" name="body" value={this.state.body} placeholder={this.props.review.body} onChange={this.handleOnChange} /><br/>
          <Button type="submit" variant="outline-dark">Submit</Button><br/>
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
      rating: parseInt(state.rating, 10),
      movieId: state.movie_id,
      userId: localStorage.currentUserId
    },
  }
}

const mapDispatchToProps = dispatch => {
  return {
    updateReview: (reviewObject) => dispatch({ type: 'UPDATE_REVIEW', review: reviewObject }),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditReviewForm);
