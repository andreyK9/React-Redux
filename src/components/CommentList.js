import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import UserForm from './UserForm';
import Comment from './Comment';
import toggleOpen from '../decorator/toggleOpen'

CommentList.propTypes = {
  comments: PropTypes.array.isRequired,
  isOpen: PropTypes.bool.isRequired,
  toggleOpen: PropTypes.func.isRequired
}


function CommentList({comments = [], isOpen, toggleOpen, articleId}) {
    return (
      <div className='Comments'>
        <button onClick = {toggleOpen}>
          {isOpen ? 'hide comment' : 'show comment'}
        </button>
        {getBody(comments, isOpen, articleId)}
      </div>
    )
  }

function getBody(comments, isOpen, articleId) {
    if(!isOpen) return null;
    if(!comments.length) return <p>No comments ...</p>;
  
    return (
      <div className='Comments'>
        <ul>
          {comments.map(id => 
            <li key={id}>
              <Comment id = {id} />
            </li>)}
        </ul>
        <UserForm id={articleId} />
      </div>
    )
  }

export default toggleOpen(CommentList);