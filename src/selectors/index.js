import { createSelector } from 'reselect'

const filtersGetter = state => state.filters
const articlesGetter = state => state.articles
const commentsGetter = state => state.comments
const idGetter = (state, props) => props.id

export const filtrateArticlesSelector =
  createSelector(articlesGetter, filtersGetter, (articles, filters) => {
    const { selected, dateRange: { from, to } } = filters

    return Object.keys(articles).reduce((acum, id) => {
      const published = Date.parse(articles[id].date)

      if ((!selected.length || selected.includes(id)) &&
        (!from || !to || (published > from && published < to))) {
          acum.push(articles[id])
        }
      
      return acum
    }, [])
  })

export const commentSelectorFactory = () => createSelector(commentsGetter, idGetter, (comments, id) => {
  console.log('---', id)
  return comments[id]
})