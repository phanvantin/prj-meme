import api from './api'

export const CategoriesService = {
  getList({
    per_page = 100,
    page = 1,
    ...restParams
  } = {}) {
    return api.call().get('/wp/v2/categories', {
      params: {
        per_page,
        page,
        lang: "vi",
        ...restParams
      }
    })
  }
} 
