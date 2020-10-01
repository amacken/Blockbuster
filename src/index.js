import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
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
