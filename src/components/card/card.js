import React, { Component } from 'react';
import { Link } from 'react-router-dom';
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
        <Link to={`/` + this.props.article.id}>
          <div className="card">
            <div className="card-title">
              <h1>{this.props.article.title}</h1>
            </div>
            <div className="card-content">
              <p>{this.props.article.excerpt}</p>
            </div>
            <div className="card-footer">
              <div>
                <p>{this.props.article.author}</p>
                <p
                  className="card-button card-button-delete"
                  onClick={($event) => {
                    $event.preventDefault();
                    this.props.onRemoveCard(this.props.article.id);
                  }}>
                  Delete
                </p>
              </div>
            </div>
          </div>
        </Link>
      </div>
    );
  }

  // events handlers
  removeCard(id) {}
}

Card.propTypes = {
  article: PropTypes.object.isRequired
};

export default Card;
