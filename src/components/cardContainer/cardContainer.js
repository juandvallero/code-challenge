import React, { Component } from 'react';
import { connect } from 'react-redux';

import Card from '../card/card';
import './cardContainer.css';
import articlesReducer from '../../store/reducers/articles.reducer';

class _CardContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  // lifecycle
  async componentWillMount() {
    this.props.fetch();
  }

  // Renders
  render() {
    if (this.state.articles && this.state.articles.length > 0) {
      return (
        <div className="columns is-multiline card-container">
          {this.state.articles.map((item) => (
            <Card article={item} key={item.id} />
          ))}
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
    }
  };
};

const mapStateToProps = (store) => {
  debugger;
  return {
    data: store.articles
  };
};

const CardContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(_CardContainer);

export default CardContainer;
