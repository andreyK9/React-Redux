import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ArticleList from './ArticleList';
import UserForm from './UserForm';
import Filters from './Filters';

class App extends Component {
  static propTypes = {
    articles: PropTypes.array.isRequired
  };



  render() {
    const { articles }  = this.props
    return(
      <div>
        <UserForm />
        <Filters articles = {articles} />
        <ArticleList 
          articles = {articles} defaultOpenId = {articles[0].id} />
      </div>
    )
  }
}
export default App