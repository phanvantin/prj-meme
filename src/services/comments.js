import api from './api'

export const CommentsService = {
  getList({
    per_page = 4,
    page = 1,
    post,
    parent
  } = {}) {
    return api.call().get('/wp/v2/comments', {
      params: {
        per_page,
        page,
        post,
        parent,
        order: 'asc',
        lang: "vi",
      }
    })
  }
} 

// UI ->  Tạo Service -> Store đẻ tạo Action Async -> Action -> Reducer -> UI
