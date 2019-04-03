import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './card.css';

class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="column is-one-quarter">
        <div className="card">
          <div className="card-title">
            <h1>{this.props.article.title}</h1>
          </div>
          <div className="card-content">
            <p>{this.props.article.excerpt}</p>
          </div>
          <div className="card-footer">
            <p>{this.props.article.author}</p>
          </div>
        </div>
      </div>
    );
  }
}

Card.propTypes = {
  article: PropTypes.object.isRequired
};

export default Card;
