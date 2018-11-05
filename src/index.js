import React from 'react';
import ReactDOM from 'react-dom';
import { routes } from './routes';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom'

ReactDOM.render(
  <Router>
    <div>
      {routes.map((route) => (
        <Route
          key={route.path}
          path={route.path}
          component={route.component}
        />
      ))}
    </div>
  </Router>,
  document.getElementById('root'));
