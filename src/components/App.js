import React, { Component } from 'react';

import PropTypes from 'prop-types';
import Articles from './routes/Articles';
import CommentsPage from "./routes/CommentsPage";
import Counter from './Counter';
import Filters from './Filters';
import Newarticle from './routes/Newarticle';
import NotFound from './routes/NotFound';
import { Route, NavLink, Switch } from 'react-router-dom';
import { ConnectedRouter } from "react-router-redux";
import history from "../history";

class App extends Component {
  static propTypes = {

  };

  render() {
    return (
      <ConnectedRouter history={history}>
        <div>
          <div>
            <h2>Main menu</h2>
            <div>
              <NavLink
                activeStyle={ { color: 'red' } }
                to='/counter'
              >
                Counter
            </NavLink>
            </div>
            <div>
              <NavLink
                activeStyle={ { color: 'red' } }
                to='/filters'
              >
                Folters
            </NavLink>
            </div>
            <div>
              <NavLink
                activeStyle={ { color: 'red' } }
                to='/articles'
              >
                Articles
            </NavLink>
            </div>
          </div>
          <Switch>
            <Route path='/counter' component={ Counter } />
            <Route path='/filters' component={ Filters } />
            <Route path='/articles/new' component={ Newarticle } />
            <Route path='/articles' component={ Articles } />
            <Route path='/comments' component={ CommentsPage } />
            <Route path='*' component={ NotFound } />
          </Switch>
        </div>
      </ConnectedRouter>
    )
  }
}
export default App