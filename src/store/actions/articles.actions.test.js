import React from 'react';
import { runSaga } from 'redux-saga';
import { fetchArticlesSaga, findArticleSaga } from './articles.actions';

describe('Fetch Articles Saga', () => {
  it('Should return an array', async () => {
    const dispatched = await recordSaga(
      fetchArticlesSaga,
      'FETCH_ARTICLES_REQUEST'
    );

    expect(dispatched).toBeDefined();
  });
});

async function recordSaga(saga, initialAction) {
  const dispatched = [];

  await runSaga(
    {
      dispatch: (action) => dispatched.push(action)
    },
    saga,
    initialAction
  ).done;

  return dispatched;
}
