import React, {Component} from 'react'
import PropTypes from 'prop-types'
import Article from './Article'
import toggleOpen from'../decorator/toggleOpen'

class ArticleList extends Component {
  static propTypes = {
    articles: PropTypes.arrayOf(PropTypes.object).isRequired,
    openArticleId: PropTypes.any,
    toggleOpenArticle: PropTypes.func.isRequired
  }

  render() {
    const {articles, openArticleId, toggleOpenArticle} = this.props;
    const articleElements = articles.map(article => 
      <li key={article.id}>
        <Article
          article={article}
          isOpen={article.id === openArticleId}
          toggleOpen={toggleOpenArticle(article.id)} />
      </li>);
    return (
      <ul>
        {articleElements}
      </ul>
    )
  }
};

export default toggleOpen(ArticleList)