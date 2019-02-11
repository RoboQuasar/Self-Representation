import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { Record, Map } from 'immutable';
import App from 'components/App';
import registerServiceWorker from './registerServiceWorker';
import 'styles/index.css';

import rootReducer from './reducers';

const initialState = Record({
  account: Map({
    fullName: 'Синеоков Роман',
    avatarSrc: 'avatar.jpg'
  }),
  auth: Map({ isLogin: false })
});

const store = createStore(
  rootReducer,
  initialState(),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
