import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import ReduxThunk from 'redux-thunk';
import { Router, browserHistory } from 'react-router';

import routes from './router';
import reducers from './reducers/';
import './style/style.scss';

const App = () => {
  /* eslint-disable no-underscore-dangle */
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const store = createStore(reducers, {}, composeEnhancers(
    applyMiddleware(ReduxThunk),
  ));
  /* eslint-enable */
  return (
    <Provider store={store}>
      <Router history={browserHistory} routes={routes} />
    </Provider>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
