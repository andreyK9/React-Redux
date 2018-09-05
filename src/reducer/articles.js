import {normalizedArticles as defaultArticles} from '../fixtures'
import {arrToMap} from '../helpers'
import { DELETE_ARTICLE, CREATE_COMMENT, LOAD_ALL_ARTICLES } from '../constants'

// arrToMap(defaultArticles)

export default (articleState = {}, action) => {
  const {type, payload, response, randomId} = action

  switch(type) {
    case DELETE_ARTICLE:
      const tmpState = {...articleState}
      delete tmpState[payload.id]
      return tmpState

    case CREATE_COMMENT:
      const article = articleState[payload.articleId]
      return {
        ...articleState, 
        [payload.articleId]: {
          ...article, 
          comments: (article.comments || []).concat(randomId)
        }  
      }

    case LOAD_ALL_ARTICLES: 
      return arrToMap(response)
  }

  return articleState
}