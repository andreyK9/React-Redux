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
    article: PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      text: PropTypes.string
    }).isRequired,
    isOpen: PropTypes.bool,
    toggleOpen: PropTypes.func
  }

  componentWillReceiveProps({isOpen, loadArticle, article}) {
    if(isOpen && !article.text && !article.loading) {
      loadArticle(article.id)
    } 
  }

  // componentWillMount() {
  //   console.log('---', 'mounting')
  // };
  
  render() {
    const { article, isOpen, toggleOpen } = this.props;
    return (
      <div ref = {this.setContainerRef}>
        <h3>{article.title}</h3>
        <button onClick = {toggleOpen}>
        {isOpen ? 'close' : 'open'}
        </button>
        <button onClick={this.handleDelete} >
          delete me
        </button>
        <CSSTransitionGroup
          component = 'div'
          transitionName = 'article'
          transitionAppear
          transitionAppearTimeout={500}
          transitionEnterTimeout={500}
          transitionLeaveTimeout={300} >
          {this.getBody()}
        </CSSTransitionGroup>
      </div>
    )
  }

  // setContainerRef = ref => {
  //   this.container = ref;
  //   console.log('---', ref);
  // }

  // setCommentRef = ref => {
  //   console.log('---', ref);
  // }

  // componentDidMount() {
  //   console.log('---', 'mounted')
  // };

  handleDelete = () => {
    const { deleteArticle, article } = this.props
    deleteArticle(article.id)
    console.log('---', 'deleting article')
  }

  getBody() {
    const {article, isOpen} = this.props;
    
    if(!isOpen) return null;
    if(article.loading) return <Loader />

    return (
      <section>
        {article.text}
        <CommentList 
          comments={article.comments}
          articleId={article.id} />
      </section>
    )
  }
};

export default connect(null, { deleteArticle, loadArticle })(Article);