
import {ACT_FETCH_POST,ACT_SET_LOAD_MORE} from './actions'

const initState = {
  postList: {
    List: [],
    currPage: 0,
    pagesize: 0,
  },
  isLoadMore: true,
}

function postsReducer(postsState = initState, action) {
  switch (action.type) {
    case ACT_SET_LOAD_MORE:
			return {
        ...postsState,
        isLoadMore: false
      }
    case ACT_FETCH_POST:
      return {
        ...postsState,
        postList: {
          ...postsState.postList,
          List: [
            ...postsState.postList.List,
            ...action.payload.posts,
          ],
          currPage:action.payload.currPage,
          pagesize:action.payload.pagesize
        }

      }
      default:
        return postsState
  }
}

export default postsReducer