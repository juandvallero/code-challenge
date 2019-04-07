import React, { Component } from 'react';
import { connect } from 'react-redux';

import Card from '../card/card';
import './cardContainer.css';

class _CardContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  // lifecycle
  componentWillMount() {
    this.props.fetch();
  }

  // Renders
  render() {
    if (this.props.articles && this.props.articles.length > 0) {
      return (
        <div>
          <div className="new">Create new article</div>
          <div className="columns is-multiline card-container">
            {this.props.articles.map((item) => (
              <Card
                article={item}
                key={item.id}
                onRemoveCard={(id) => {
                  this.props.remove(id);
                }}
              />
            ))}
          </div>
        </div>
      );
    } else {
      return <p>Not data found</p>;
    }
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetch: () => {
      dispatch({ type: 'FETCH_ARTICLES_REQUEST' });
    },
    remove: (id) => {
      dispatch({ type: 'REMOVE_ARTICLE_REQUEST', payload: { id: id } });
    }
  };
};

const mapStateToProps = (store) => {
  return {
    articles: store.articles
  };
};

const CardContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(_CardContainer);

export default CardContainer;
