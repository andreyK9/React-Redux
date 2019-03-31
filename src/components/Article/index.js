import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CommentList from '../CommentList';
import { CSSTransitionGroup } from 'react-transition-group'
import { connect } from 'react-redux'
import { deleteArticle, loadArticle } from '../../AC'
import Loader from '../Loader'
import './article.css'

class Article extends Component {
  static propTypes = {
    id: PropTypes.string.isRequired,
    isOpen: PropTypes.bool,
    toggleOpen: PropTypes.func,
    // from connect
    article: PropTypes.shape({
      id: PropTypes.string,
      title: PropTypes.string,
      text: PropTypes.string
    }),
  }

  componentDidMount() {
    const { loadArticle, article, id } = this.props;

    if (!article || (!article.text && !article.loading)) {
      loadArticle(id)
    }
  }

  // componentWillMount() {
  //   console.log('---', 'mounting')
  // };

  render() {
    const { article, isOpen, toggleOpen } = this.props;

    if (!article) return null;

    return (
      <div ref={ this.setContainerRef }>
        <h3>{ article.title }</h3>
        {/* <button onClick = {toggleOpen}>
        {isOpen ? 'close' : 'open'}
        </button> */}
        <button onClick={ this.handleDelete } >
          delete me
        </button>
        <CSSTransitionGroup
          component='div'
          transitionName='article'
          transitionAppear
          transitionAppearTimeout={ 500 }
          transitionEnterTimeout={ 500 }
          transitionLeaveTimeout={ 300 } >
          { this.getBody() }
        </CSSTransitionGroup>
      </div>
    )
  }

  handleDelete = () => {
    const { deleteArticle, article } = this.props
    deleteArticle(article.id)
    console.log('---', 'deleting article')
  }

  getBody() {
    const { article, isOpen } = this.props;

    if (!isOpen) return null;
    if (article.loading) return <Loader />

    return (
      <section>
        { article.text }
        <CommentList article={ article } />
      </section>
    )
  }
};

export default connect((state, ownProps) => ({
  article: state.articles.entities.get(ownProps.id)
}), { deleteArticle, loadArticle }, null, {pure: false})(Article);