import React from 'react';
import ReactDOM from 'react-dom';
import { routes } from './routes';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import Template from './containers/Template';

ReactDOM.render(
  <Router>
    <Template>
      {routes.map((route) => (
        <Route
          key={route.path}
          exact 
          path={route.path}
          component={route.component}
        />
      ))}
    </Template>
  </Router>,
  document.getElementById('root'));
