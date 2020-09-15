import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import './index.css';
import Main from './components/Main/Main.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import { createAPI } from './components/api/api';
import reducer from './reducer/reducer';

const api = createAPI();

console.log(api, 'api')

const store = createStore(
  reducer,
  composeWithDevTools(
      applyMiddleware(thunk.withExtraArgument(api))
  )
);

const render = () => {
  ReactDOM.render(
    <Provider store={store}>
      <Main />
    </Provider>,
    document.getElementById('root')
  );
};

render();
