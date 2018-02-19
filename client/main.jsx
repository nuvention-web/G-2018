import React from 'react';
import ReactDOM from 'react-dom';

// React Router
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import App from './components/app.jsx';


ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={App}>

    </Route>

  </Router>,
  document.getElementById('app')
);
