import React, {Component} from 'react'
import PropTypes from 'prop-types'
import Article from './Article'
import accordion from'../decorator/accordion'
import { connect } from 'react-redux'
import {filtrateArticlesSelector} from '../selectors'
import {loadAllArticles} from '../AC'
import Loader from './Loader'

class ArticleList extends Component {
  static propTypes = {
    // from connect
    articles: PropTypes.array.isRequired,
    // from accordion
    openArticleId: PropTypes.string,
    toggleOpenArticle: PropTypes.func.isRequired
  }

  componentDidMount() {
    const {
      loaded, 
      loading, 
      loadAllArticles
    } = this.props
    if(!loading || !loaded)loadAllArticles()
  }

  render() {
    const {
      articles, 
      openArticleId, 
      toggleOpenArticle,
      loading
    } = this.props;

    if(loading) return <Loader />
    
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

export default connect(state => ({
  articles: filtrateArticlesSelector(state),
  loading: state.articles.loading,
  loaded: state.articles.loaded
}), { loadAllArticles })(accordion(ArticleList))