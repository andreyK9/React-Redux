import React from 'react'
import CommentsPagination from "../CommentsPagination";
import { Redirect, Route } from "react-router-dom";

function CommentsPage({ match }) {
  if (match.isExact) return <Redirect to='comments/1' />

  return <Route path='comments/:page' render={ getCommentsPagination } />


};

function getCommentsPagination({ match }) {
  return <CommentsPagination page={ match.params.page } />
}

export default CommentsPage
