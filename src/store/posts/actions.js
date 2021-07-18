import { PostsService } from '../../services/posts';

export const ACT_FETCH_POST ='ACT_FETCH_POST';
export const ACT_SET_LOAD_MORE = 'ACT_SET_LOAD_MORE'

export function actFetchpost({ posts,
  currPage,
  pagesize }) {
  return {
    type: ACT_FETCH_POST,
    payload: {
      posts,
      currPage,
      pagesize
    }
  }
}

export function actSetLoadMore () {
  return {
    type: ACT_SET_LOAD_MORE,
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
    const posts = response.data.posts;
    if(posts.length === 0) {
      dispatch(actSetLoadMore())
    }
    dispatch(actFetchpost({
      posts,
      currPage,
      pagesize
    })) 
  }
  catch (err) {

  }
}
  
}