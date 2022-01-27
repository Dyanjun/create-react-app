import ReactDOM from 'react-dom';
import React from 'react';
import { ConfigProvider } from 'antd';
import zhCN from 'antd/es/locale/zh_CN';

import { Provider } from 'react-redux';
import * as storage from 'redux-storage';
import createEngine from 'redux-storage-engine-localstorage';

import store from './redux/store';
import App from './app';

const engine = createEngine('msp');
const load = storage.createLoader(engine);
load(store);

ReactDOM.render(
  <ConfigProvider locale={zhCN}>
    <Provider store={store}>
      <App />
    </Provider>
  </ConfigProvider>,
  document.getElementById('root'),
);
