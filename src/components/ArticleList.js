import React, {Component} from 'react';
import Article from './Article'

export default class ArticleList extends Component {
  state = {
    openArticleId: null
  }

  render() {
    const {articles} = this.props;
    const articleElements = articles.map(article => 
      <li key={article.id}>
        <Article
          article={article}
          isOpen={article.id === this.state.openArticleId}
          toggleOpen={this.toggleOpenArticle.bind(this, article.id)} />
      </li>);
    return (
      <ul>
        {articleElements}
      </ul>
    )
  }

  toggleOpenArticle(openArticleId){
    console.log(openArticleId);
    this.setState({openArticleId: openArticleId})
  }
};