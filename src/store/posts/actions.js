import { PostsService } from '../../services/posts';

export const ACT_FETCH_POST ='ACT_FETCH_POST';

export function actFetchpost({ posts }) {
  return {
    type: ACT_FETCH_POST,
    payload: {
      posts
    }
  }
}




export function actFetchpostAsyn({
    pagesize = 3,
    currPage = 1,
    ...restParams
} = {}) {
return async dispatch =>{
  try {
    const response = await PostsService.getList({
      pagesize,
      currPage,
    ...restParams
    })
    const posts = response.data
    dispatch(actFetchpost(posts)) 
  }
  catch (err) {

  }
}
  
}