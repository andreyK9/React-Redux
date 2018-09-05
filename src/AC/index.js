import { 
  DELETE_ARTICLE, 
  INCREMENT,
  CHANGE_DATE_RANGE, 
  CHANGE_SELECTION,
  CREATE_COMMENT,
  LOAD_ALL_ARTICLES
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