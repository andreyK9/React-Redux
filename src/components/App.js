import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ArticleList from './ArticleList';
import Counter from './Counter';
import Filters from './Filters';

class App extends Component {
  static propTypes = {

  };

  render() {
    return(
      <div>
        <Counter />
         <Filters />
        <ArticleList />
      </div>
    )
  }
}
export default App