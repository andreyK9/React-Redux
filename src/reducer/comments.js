import {normalizedComments as defaultComments} from '../fixtures'
import {arrToMap} from '../helpers'
import { CREATE_COMMENT, LOAD_ARTICLE_COMMENTS, SUCCESS } from '../constants'
import {OrderedMap, Record} from 'immutable'

const CommentRecord = Record({
  id: null,
  text: null,
  user: null
})

const ReducerState = Record({
  entities: new OrderedMap({})
})

const defaultState = new ReducerState()

export default (commentsState = defaultState, action) => {
  const {type, payload, response, randomId} = action

  switch(type) {
    case CREATE_COMMENT: 
      console.log('commentsId: ', randomId)
      return (
      commentsState.setIn(
        ['entities', randomId],
         new CommentRecord({...payload.comment, id: randomId}))
      )

    case LOAD_ARTICLE_COMMENTS + SUCCESS:
      return commentsState.update(
        'entities', entities => entities.merge(arrToMap(response, CommentRecord))
      )
  }

  return commentsState
}