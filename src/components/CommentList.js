import React from 'react';
import PropTypes from 'prop-types';
import Comment from './Comment';
import toggleOpen from '../decorator/toggleOpen'

CommentList.propTypes = {
  comments: PropTypes.array.isRequired,
  isOpen: PropTypes.bool.isRequired,
  toggleOpen: PropTypes.func.isRequired
}

function CommentList({comments = [], isOpen, toggleOpen}) {
  return (
    <div className='Comments'>
      <button onClick = {toggleOpen}>
        {isOpen ? 'hide comment' : 'show comment'}
      </button>
      {getBody(comments, isOpen)}
    </div>
  )
};

function getBody(comments, isOpen) {
  if(!isOpen) return null;
  if(!comments.length) return <p>No comments ...</p>;

  return (
    <ul>
      {comments.map(comment => 
        <li key={comment.id}>
          <Comment comment={comment} />
        </li>)}
    </ul>
  )
};

export default toggleOpen(CommentList);