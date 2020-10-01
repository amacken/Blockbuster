import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import Show from './components/Show/Show';
import Edit from './components/Edit/Edit';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom'
// import * as serviceWorker from './serviceWorker';

const routes = [
  {
    path: '/',
    component: App,
    name: 'Home'
  },
  {
    path: '/:id/edit',
    component: Edit,
    name: 'Edit'
  },
  {
    path: '/:id',
    component: Show,
    name: 'Show'
  }
];

const anchor = document.getElementById('root');

ReactDOM.render(
  <Router>
    <Switch>
      {routes.map(route => {
        return (
          <Route
            component={route.component}
            key={route.name}
            path={route.path}
          />
        );
      })}
    </Switch>
  </Router>,
  anchor
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>,
  // document.getElementById('root')
);
