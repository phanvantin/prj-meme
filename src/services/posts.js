import api from './api'

export const PostsService = {
  getList({
    pagesize = 3,
    currPage = 1,
    // orderby = "date",
    ...restParams
  } = {}) {
    return api.call().get('/post/getListPagination.php', {
      params: {
        pagesize,
        currPage,
        // orderby,
        // lang: "vi",
        ...restParams
      }
    })
  }
} 

// UI ->  Tạo Service -> Store đẻ tạo Action Async -> Action -> Reducer -> UI
