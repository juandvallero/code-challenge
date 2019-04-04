import React, { Component } from 'react';
import { connect } from 'react-redux';
import './article.css';

class _Article extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  // lifecycle
  componentWillMount() {
    this.props.find(this.props.match.params.id);
  }

  // Renders
  render() {
    if (this.props.article) {
      return (
        <div>
          <div className="mainContainer">
            <div className="article">
              <div className="article-title">
                <h1>
                  {this.props.article.title}
                  {this.renderPublished()}
                </h1>
                <div className="tags-container">
                  <ul>{this.renderTags()}</ul>
                </div>
              </div>
              <div className="article-content">
                <p>{this.props.article.content}</p>
              </div>
              <div className="article-footer">
                <p>{this.props.article.author}</p>
              </div>
            </div>
          </div>
        </div>
      );
    } else {
      return null;
    }
  }

  renderTags() {
    if (this.props.article && this.props.article.tags) {
      return this.props.article.tags.map((tag, index) => {
        return <li key={index}>{tag}</li>;
      });
    } else {
      return null;
    }
  }

  renderPublished() {
    if (this.props.article && this.props.article.published) {
      return <span className="article-published">Published</span>;
    } else {
      return <span className="article-nonpublished">Non Published</span>;
    }
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    find: (id) => {
      dispatch({ type: 'FIND_ARTICLE_REQUEST', payload: { id: id } });
    }
  };
};

const mapStateToProps = (store) => {
  return {
    article: store.articles
  };
};

const Article = connect(
  mapStateToProps,
  mapDispatchToProps
)(_Article);

export default Article;
