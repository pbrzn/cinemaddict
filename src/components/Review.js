import React, { Component} from 'react';
import { connect } from 'react-redux';

class Review extends Component {

  formatParagraphs = props => {
    this.props.body.map(paragraph => <p>paragraph</p>)
  }

  render(){
    return (
      <div>
        <h1>{this.props.title}</h1>
        <h2>Rating: {this.props.rating}</h2>
        <h3>{this.props.user.username}'s review of {this.props.movie.title}</h3>
        {this.formatParagraphs}
      </div>
    );
  }
}

export default Review
