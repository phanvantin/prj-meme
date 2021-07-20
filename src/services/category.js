import api from './api'

export const CategoryService = {
  getList() {
    return api.call().get('/categories/index.php')
  },
  getListById({pagesize=3,currPage=1, ...restParams}={}) {
    return api.callWithToken().get('/post/getListByCategory.php',{params: {
      pagesize,
      currPage,
      ...restParams
    }})
  }
}