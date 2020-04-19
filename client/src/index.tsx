import 'antd/dist/antd.css';
import paths from 'config/paths';
import { ConnectedRouter } from 'connected-react-router';
import { createBrowserHistory } from 'history';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import {
  Route,
  Switch
} from 'react-router-dom';

import './index.css';
import App from './app/App';
import configureStore from './core/store/configureStore';

const history = createBrowserHistory();
const store = configureStore(history);

const Application: React.ReactElement = (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Switch>
        <Route path={paths.home} component={App} />
      </Switch>
    </ConnectedRouter>
  </Provider>
);

ReactDOM.render(
  Application,
  document.getElementById('root')
);
