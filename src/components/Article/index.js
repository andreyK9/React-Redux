import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CommentList from '../CommentList';
import { CSSTransitionGroup } from 'react-transition-group'
import { connect } from 'react-redux'
import { deleteArticle } from '../../AC'
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

  // componentWillReceiveProps(nextProps) {
  //   console.log('---', 'updating', this.props.isOpen, nextProps.isOpen)
  // }

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
    return (
      <section>
        {article.text}
        <CommentList comments={article.comments} />
      </section>
    )
  }
};

export default connect(null, { deleteArticle })(Article);