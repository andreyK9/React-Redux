import React, { Component } from 'react';
import ArticleList from "../ArticleList";
import Article from "../Article";
import { Route } from "react-router-dom";

export default class Articles extends Component {
  render() {
    return (
      <div>
        <ArticleList />
        <Route path='/articles' render={ this.getIndex } exact />
        <Route path='/articles/:id' render={ this.getArticle } />
      </div>
    )
  }

  getArticle = ({ match }) => {
    const { id } = match.params;

    return <Article key={ id } id={ id } isOpen />
  }

  getIndex = () => {
    return <h2>Please select article</h2>
  }
}
