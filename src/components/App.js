import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Articles from './routes/Articles';
import Counter from './Counter';
import Filters from './Filters';
import { HashRouter as Router, Route, NavLink } from 'react-router-dom';

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
          <Route path='/counter' component={ Counter } />
          <Route path='/filters' component={ Filters } />
          <Route path='/articles' component={ Articles } />
        </div>
      </Router>
    )
  }
}
export default App