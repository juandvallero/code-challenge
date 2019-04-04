import React, { Component } from 'react';
import './article.css';

class Article extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  // lifecycle
  async componentWillMount() {}

  // Renders
  render() {
    return (
      <div>
        <div className="mainContainer">
          <div className="columns  is-centered card-container">
            <div className="column is-one-quarter">
              <div className="card">
                <div className="card-title">
                  <h1>TITULO</h1>
                </div>
                <div className="card-content">
                  <p>CONTENIDO</p>
                </div>
                <div className="card-footer">
                  <p>AUTOR</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Article;
