import React from 'react';
<<<<<<< HEAD
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import store from './redux/configureStore';
import App from './App';
import './index.css';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Provider store={store}>
        <App />
    </Provider>
  </React.StrictMode>
);
=======
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import store from './features/store'

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
>>>>>>> develop
