import { ACT_FETCH_CATEGORIES } from './actions'

const initState = {
  hashCategoryById: {}
}

function reducer(categoriesState = initState, action) {
  switch (action.type) {
    case ACT_FETCH_CATEGORIES:

      const newHashCategoryById = {}

      for (let index = 0; index < action.payload.categories.length; index++) {
        const value = action.payload.categories[index];
        const key = 'category-' + value.id
        
        newHashCategoryById[key] = value
      }

      return {
        ...categoriesState,
        hashCategoryById: newHashCategoryById
      }
    default:
      return categoriesState
  }
}

export default reducer