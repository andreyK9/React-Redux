import {normalizedArticles as defaultArticles} from '../fixtures'
import {arrToMap} from '../helpers'
import { DELETE_ARTICLE, CREATE_COMMENT, LOAD_ALL_ARTICLES } from '../constants'
import {Map, Record} from 'immutable'

const ArticleRecord = Record({
  text: null,
  title: null,
  id: null,
  comments: []
})

const defaultState = new Map({})

export default (articleState = defaultState, action) => {
  const {type, payload, response, randomId} = action

  switch(type) {
    case DELETE_ARTICLE:
      return articleState.delete(payload.id)

    case CREATE_COMMENT:
      return articleState.updateIn(
        [payload.articleId, 'comments'], 
        comments => comments.concat(randomId)
      )

    case LOAD_ALL_ARTICLES: 
      return arrToMap(response, ArticleRecord)
  }

  return articleState
}