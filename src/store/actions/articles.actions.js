import axios from 'axios';
import API_END_POINT from '../../config/api';
import { call, put, takeEvery } from 'redux-saga/effects';
import {
  FETCH_ARTICLES_QUERY,
  FIND_ARTICLE_QUERY,
  REMOVE_ARTICLE_QUERY
} from '../queries/articles.queries';

// Fetch Articles
const _fetchArticles = () => {
  const query = FETCH_ARTICLES_QUERY;
  return axios.post(API_END_POINT, { query });
};

function* fetchArticles() {
  try {
    const response = yield call(_fetchArticles);
    yield put({ type: 'FETCH_ARTICLES_SUCCESS', payload: response.data });
  } catch (e) {
    yield put({ type: 'FETCH_ARTICLES_FAILED', message: e.message });
  }
}

export function* fetchArticlesSaga() {
  yield takeEvery('FETCH_ARTICLES_REQUEST', fetchArticles);
}

// Find Article
const _findArticle = (id) => {
  const query = FIND_ARTICLE_QUERY(id);
  return axios.post(API_END_POINT, { query });
};

function* findArticle(action) {
  try {
    const response = yield call(_findArticle, action.payload.id);
    yield put({ type: 'FIND_ARTICLE_SUCCESS', payload: response.data });
  } catch (e) {
    yield put({ type: 'FIND_ARTICLE_FAILED', message: e.message });
  }
}

export function* findArticleSaga() {
  yield takeEvery('FIND_ARTICLE_REQUEST', findArticle);
}

// Remove Article
const _removeArticle = (id) => {
  const query = REMOVE_ARTICLE_QUERY(id);
  return axios.post(API_END_POINT, { query });
};

function* removeArticle(action) {
  try {
    const response = yield call(_removeArticle, action.payload.id);
    yield put({ type: 'REMOVE_ARTICLE_SUCCESS', payload: response.data });
    yield put({ type: 'FETCH_ARTICLES_REQUEST' });
  } catch (e) {
    yield put({ type: 'REMOVE_ARTICLE_FAILED', message: e.message });
  }
}

export function* removeArticleSaga() {
  yield takeEvery('REMOVE_ARTICLE_REQUEST', removeArticle);
}
