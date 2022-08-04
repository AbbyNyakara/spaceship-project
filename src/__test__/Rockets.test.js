/* eslint-disable */

import React from 'react';
import TestRenderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import store from '../Redux/configureStore';
import Rockets from '../components/Rockets';

it('Rockets Component snapshot test', () => {
  const rocketsRender = TestRenderer
    .create(
      <Provider store={store}>
        <Rockets />
      </Provider>,
    )
    .toJSON();
  expect(rocketsRender).toMatchSnapshot();
});
