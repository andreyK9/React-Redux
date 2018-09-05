import { createSelector } from 'reselect'
import {mapToArr} from '../helpers'

const filtersGetter = state => state.filters
const articlesGetter = state => state.articles.entities
const commentsGetter = state => state.comments
const idGetter = (state, props) => props.id

export const filtrateArticlesSelector =
  createSelector(articlesGetter, filtersGetter, (articles, filters) => {
    const { selected, dateRange: { from, to } } = filters

    return mapToArr(articles).reduce((acum, article) => {
      const published = Date.parse(article.date)

      if ((!selected.length || selected.includes(article.id)) &&
        (!from || !to || (published > from && published < to))) {
          acum.push(article)
        }
      
      return acum
    }, [])
  })

export const commentSelectorFactory = () => {
  return createSelector(commentsGetter, idGetter, (comments, id) => {
    console.log('---', id)
    return comments[id]
})
}