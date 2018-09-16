import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import UserForm from './UserForm';
import Comment from './Comment';
import toggleOpen from '../decorator/toggleOpen'
import {loadArticleComments} from '../AC'
import Loader from './Loader'


class CommentList extends React.Component {
  static propTypes = {
    article: PropTypes.object.isRequired,
    // from toggleOpen
    isOpen: PropTypes.bool.isRequired,
    toggleOpen: PropTypes.func.isRequired
  }

  componentWillReceiveProps({isOpen, article, loadArticleComments}) {
    if(!this.props.isOpen && isOpen && !article.commentsLoading && !article.commentsLoaded) {
      loadArticleComments(article.id)
    }
  }

  render(){
    const {isOpen, toggleOpen, article} = this.props
    
    return (
      <div className='Comments'>
        <button onClick = {toggleOpen}>
          {isOpen ? 'hide comment' : 'show comment'}
        </button>
        {this.getBody({isOpen, article})}
      </div>
    )
  }

  getBody({isOpen, article:{comments = [], commentsLoading, commentsLoaded, id }}) {
    if(!isOpen) return null;
    if(commentsLoading) return <Loader />
    if(!commentsLoaded) return null

    if(!comments.length) return (
      <div>
        <p>No comments ...</p>;
        <UserForm id={id} />
      </div>
    )
      
    return (
      <div className='Comments'>
        <ul>
          {comments.map(id => 
            <li key={id}>
              <Comment id = {id} />
            </li>)}
        </ul>
        <UserForm id={id} />
      </div>
    )
  }
}


export default connect(
  null,
  { loadArticleComments }
)(toggleOpen(CommentList));