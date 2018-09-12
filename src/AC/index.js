import { 
  DELETE_ARTICLE, 
  INCREMENT,
  CHANGE_DATE_RANGE, 
  CHANGE_SELECTION,
  CREATE_COMMENT,
  LOAD_ARTICLE,
  LOAD_ALL_ARTICLES,
  START,
  FAIL,
  SUCCESS
} from '../constants'

export function increment() {
  return {
    type: INCREMENT
  }
}

export function deleteArticle(id) {
  return {
    type: DELETE_ARTICLE,
    payload: { id }
  }
}

export function changeDateRange(dateRange) {
  return {
    type: CHANGE_DATE_RANGE,
    payload: { dateRange }
  }
}

export function changeSelected(selected) {
  return {
    type: CHANGE_SELECTION,
    payload: { selected }
  }
}

export function createComment(newComment, articleId) {
  return {
    type: CREATE_COMMENT,
    payload: { newComment, articleId },
    generateId: true
  }
}

export function loadAllArticles() {
  return {
    type: LOAD_ALL_ARTICLES,
    callAPI: '/api/article'
  }
}

export function loadArticle(id) {
  return (dispatch) => {
    dispatch({
      type: LOAD_ARTICLE + START,
      payload: { id }
    })

    setTimeout(() => {
      fetch(`/api/article/${ id }`)
        .then( res => res.json())
        .then(response => dispatch({
          type: LOAD_ARTICLE + SUCCESS,
          payload: { id, response }
        }))
        .catch(error => dispatch({
          type: LOAD_ARTICLE + FAIL,
          payload: { id, error }
        }))
    }, 1000)
  }
}

// export function loadArticle(id) {
//   return {
//       type: LOAD_ARTICLE,
//       callAPI: `/api/article/${id}`
//   }
// }
