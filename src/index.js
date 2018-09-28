import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import './index.less';
// import App from './App';
import store from '@/store/store';
import RouterConfig from '@/router/RouterConfig';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <Provider store={store}>
    <RouterConfig />
  </Provider>,
  document.getElementById('root')
);


registerServiceWorker();
