import { CategoriesService } from "../../services/categories"

/**
 * Action Types
 */
export const ACT_FETCH_CATEGORIES = 'ACT_FETCH_CATEGORIES'


/**
 * Action Creator
 */
export function actFetchCategories({ categories }) {
  return {
    type: ACT_FETCH_CATEGORIES,
    payload: { categories }
  }
}


/**
 * Action Async
 */

export function actFetchCategoriesAsync() {
  return function(dispatch) {
    return CategoriesService
      .getList()
      .then(res => {
        dispatch(actFetchCategories({ categories: res.data }))
      })
      .catch(err => {
        console.log('[actFetchCategoriesAsync]', err)
      })
  }
} 

// Async Await
export function actFetchCategoryBySlugAsync(slug) {
  return async () => {
    
    // return CategoriesService.getList({ slug })
    //   .then(response => {
    //     const category = response.data[0]

    //     if (!category) {
    //       throw new Error('Category not found')
    //     }

    //     return {
    //       ok: true,
    //       data: category,
    //       err: null
    //     }
    //   })
    //   .catch(err => {
    //     return {
    //       ok: false,
    //       err: err
    //     }
    //   })
    
    try {
      const response = await CategoriesService.getList({ slug })
      const category = response.data[0]
      
      if (!category) {
        throw new Error('Category not found')
      }

      return {
        ok: true,
        data: category
      }
    } catch(err) {
      return {
        ok: false,
        err: err
      }
    }
  }
}