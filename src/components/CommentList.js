import React from 'react';
import PropTypes from 'prop-types';
import UserForm from './UserForm'
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
  }

function getBody(comments, isOpen) {
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
        <UserForm />
      </div>
    )
  }

export default toggleOpen(CommentList);