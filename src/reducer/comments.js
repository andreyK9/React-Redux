import {normalizedComments as defaultComments} from '../fixtures'
import {arrToMap} from '../helpers'
import { CREATE_COMMENT } from '../constants'

export default (commentsState = arrToMap(defaultComments), action) => {
  const {type, payload, randomId} = action

  switch(type) {
    case CREATE_COMMENT: 
      console.log('commentsId: ', randomId)
      return (
      { ...commentsState, [randomId]: payload.newComment }
    )
  }

  return commentsState
}