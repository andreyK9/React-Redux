import { normalizedArticles as defaultArticles } from '../fixtures'
import { arrToMap } from '../helpers'
import { DELETE_ARTICLE, CREATE_COMMENT, LOAD_ALL_ARTICLES, LOAD_ARTICLE, START,
  SUCCESS, FAIL
} from '../constants'
import { Map, Record, OrderedMap } from 'immutable'

const ArticleRecord = Record({
  text: null,
  title: null,
  id: null,
  loading: false,
  comments: []
})

const ReducerState = Record({
  loading: false,
  loaded: false,
  entities: new OrderedMap({})
})

const defaultState = new ReducerState()


export default (articleState = defaultState, action) => {
  const { type, payload, response, randomId } = action

  switch (type) {
    case DELETE_ARTICLE:
      return articleState.deleteIn(['entities', payload.id])

    case CREATE_COMMENT:
      return articleState.updateIn(
        ['entities', payload.articleId, 'comments'],
        comments => comments.concat(randomId)
      )

    case LOAD_ALL_ARTICLES + START:
      return articleState.set('loading', true)

    case LOAD_ALL_ARTICLES + SUCCESS:
      return articleState
        .set('entities', arrToMap(response, ArticleRecord))
        .set('loading', false)
        .set('loaded', true)

    case LOAD_ARTICLE + START:
      return articleState
        .setIn(['entities', payload.id, 'loading'], true)

    case LOAD_ARTICLE + SUCCESS:
      return articleState
        .setIn(
          ['entities', payload.id],
          new ArticleRecord(payload.response)
        )
  }

  return articleState
}