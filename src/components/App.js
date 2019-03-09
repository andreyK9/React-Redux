import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Articles from './routes/Articles';
import Counter from './Counter';
import Filters from './Filters';
import Newarticle from './routes/Newarticle';
import NotFound from './routes/NotFound';
import {
  BrowserRouter as Router,
  Route, NavLink, Switch
} from 'react-router-dom';

class App extends Component {
  static propTypes = {

  };

  render() {
    return (
      <Router>
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
            <Route path='*' component={ NotFound } />
          </Switch>
        </div>
      </Router>
    )
  }
}
export default App