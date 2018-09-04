import {normalizedArticles as defaultArticles} from '../fixtures'
import { DELETE_ARTICLE, CREATE_COMMENT } from '../constants'

const articlesMap = defaultArticles.reduce((acum, article) => {
  acum[article.id] = article
  return acum
}, {})

export default (articleState = articlesMap, action) => {
  const {type, payload} = action

  switch(type) {
    case DELETE_ARTICLE: return (
      articleState.filter(article => article.id !== payload.id)
    )

    case CREATE_COMMENT:
      const {comments} = articleState[payload.articleId]

      articleState[payload.articleId].comments = 
        [...comments, payload.newComment.id]

      return {...articleState}
  }

  return articleState
}