/* eslint-disable */

import React from 'react';
import TestRenderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import store from '../Redux/configureStore';
import Profile from '../components/Profile';

it('Missions Component snapshot test', () => {
  const profileRender = TestRenderer.create(
    <Provider store={store}>
      <Profile />
    </Provider>,
  )
    .toJSON();
  expect(profileRender).toMatchSnapshot();
});
