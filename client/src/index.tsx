import 'antd/dist/antd.css';
import paths from 'config/paths';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom';

import './index.css';
import App from './app/App';
import configureStore from './core/store/configureStore';

const store = configureStore();

const Application: React.ReactElement = (
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <Route path={paths.home} component={App} />
      </Switch>
    </BrowserRouter>
  </Provider>
);

ReactDOM.render(
  Application,
  document.getElementById('root')
);
