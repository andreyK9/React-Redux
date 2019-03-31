import React, { Component } from 'react';

import PropTypes from 'prop-types';
import Articles from './routes/Articles';
import CommentsPage from "./routes/CommentsPage";
import Counter from './Counter';
import Filters from './Filters';
import UserForm from "./UserForm";
import Newarticle from './routes/Newarticle';
import NotFound from './routes/NotFound';
import { Route, NavLink, Switch } from 'react-router-dom';
import { ConnectedRouter } from "react-router-redux";
import history from "../history";

class App extends Component {
  static propTypes = {

  };

  static childContextTypes = {
    user: PropTypes.string
  };

  getChildContext() {
    return {
      user: this.state.userName
    }
  }

  state = {
    userName: '',
  }

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
          <UserForm 
            value={this.state.userName} 
            onChange={this.handleUserChange} />
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

  handleUserChange = (userName) => this.setState({ userName })
}
export default App