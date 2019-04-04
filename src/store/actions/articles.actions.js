import axios from 'axios';
import API_END_POINT from '../../config/api';
import { call, put, takeEvery } from 'redux-saga/effects';

const ARTICLES_QUERY = `{
    articles {
      author
      excerpt
      id
      title
    }
  }`;

const getArticles = () => {
  return axios.post(API_END_POINT, { ARTICLES_QUERY });
};

function* fetchArticles() {
  try {
    const response = yield call(getArticles);
    yield put({ type: 'FETCH_ARTICLES_SUCCESS', payload: response.data });
  } catch (e) {
    yield put({ type: 'FETCH_ARTICLES_FAILED', message: e.message });
  }
}

function* articlesSaga() {
  yield takeEvery('FETCH_ARTICLES_REQUEST', fetchArticles);
}

export default articlesSaga;
