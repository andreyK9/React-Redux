import {normalizedComments as defaultComments} from '../fixtures'
import { CREATE_COMMENT } from '../constants'

const commentsMap = defaultComments.reduce((acc, comment) => {
  acc[comment.id] = comment
  return acc
}, {})

export default (commentsState = commentsMap, action) => {
  const {type, payload} = action

  switch(type) {
    case CREATE_COMMENT: 
      return (
      { ...commentsState, [payload.newComment.id]: payload.newComment }
    )
  }

  return commentsState
}