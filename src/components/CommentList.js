import React, {Component} from 'react';
import Comment from './Comment';
import toggleOpen from '../decorator/toggleOpen'

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
  if(isOpen) return null;
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