
import {ACT_FETCH_POST} from './actions'

const initState = {
  postList: [],

}

function postsReducer(postsState = initState, action) {
  switch (action.type) {
    case ACT_FETCH_POST:
      return {
        ...postsState,
        postList: action.payload.posts

      }
      default:
        return postsState
  }
}

export default postsReducer