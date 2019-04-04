export default function articlesReducer(state = [], action) {
  switch (action.type) {
    case 'FETCH_ARTICLES_SUCCESS':
      return action.payload.data.articles;
    case 'FETCH_ARTICLES_FAILED':
      return Object.assign({}, action.payload);
    case 'FIND_ARTICLE_SUCCESS':
      return action.payload.data.article;
    case 'FIND_ARTICLE_FAILED':
      return Object.assign({}, action.payload);
    default:
      return state;
  }
}
