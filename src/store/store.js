import { createLogger } from 'redux-logger';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import articlesReducer from './reducers/articles.reducer';
import { fetchArticlesSaga, findArticleSaga } from './actions/articles.actions';

const logger = createLogger({
  collapsed: true,
  duration: true
});

const appReducer = combineReducers({
  articles: articlesReducer
});

const sagaMiddleware = createSagaMiddleware();

export const store = createStore(
  appReducer,
  applyMiddleware(logger, sagaMiddleware)
);

// Run Sagas
sagaMiddleware.run(fetchArticlesSaga);
sagaMiddleware.run(findArticleSaga);
