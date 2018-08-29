import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CommentList from './CommentList';
import { CSSTransitionGroup } from 'react-transition-group'
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
        <CSSTransitionGroup
          transitionName = 'article'
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

export default Article;