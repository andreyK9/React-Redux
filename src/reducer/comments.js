import {normalizedComments as defaultComments} from '../fixtures'
import { DELETE_ARTICLE } from '../constants'

export default (commentsState = defaultComments, action) => {
  const {type, payload} = action



  return commentsState
}