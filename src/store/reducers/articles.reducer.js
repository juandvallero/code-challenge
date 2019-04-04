export default function articlesReducer(state = [], action) {
  switch (action.type) {
    case 'FETCH_ARTICLES_SUCCESS':
      return Object.assign({}, action.payload);
    case 'FETCH_ARTICLES_FAILED':
      return Object.assign({}, action.payload);
    default:
      return state;
  }
}
