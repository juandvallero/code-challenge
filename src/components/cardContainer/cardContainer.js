import React, { Component } from 'react';
import Card from '../card/card';
import request from '../../services/request';
import { ARTICLES_QUERY } from '../../services/queries';
import './cardContainer.css';

class CardContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  // lifecycle
  async componentWillMount() {
    try {
      let response = await request(ARTICLES_QUERY);
      this.setState({ articles: response.data.articles });
    } catch (ex) {
      console.log(ex);
    }
  }

  // Renders
  render() {
    if (this.state.articles && this.state.articles.length > 0) {
      return (
        <div className="columns  is-multiline card-container">
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

export default CardContainer;
