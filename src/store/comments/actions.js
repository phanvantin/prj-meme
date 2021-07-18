import { DEFAULT_PER_PAGE } from "../../helpers/paging"
import { CommentsService } from "../../services/comments"

/**
 * Action Types
 */
export const ACT_FETCH_PARENT_COMMENTS = 'ACT_FETCH_PARENT_COMMENTS'
export const ACT_FETCH_CHILD_COMMENTS = 'ACT_FETCH_CHILD_COMMENTS'
export const ACT_INIT_CHILD_COMMENT_PAGING = 'ACT_INIT_CHILD_COMMENT_PAGING'

/**
 * Action Creator
 */

export function actFetchComments({
  comments,
  perPage,
  currentPage,
  totalItems,
  totalPages,
  parentId
}) {
  return {
    type: parentId === 0 ? ACT_FETCH_PARENT_COMMENTS : ACT_FETCH_CHILD_COMMENTS,
    payload: { 
      comments,
      perPage,
      currentPage,
      totalItems,
      totalPages,
      parentId
    }
  }
}

export default function actInitChildCommentPaging(listParentComments) {
  return {
    type: ACT_INIT_CHILD_COMMENT_PAGING,
    payload: { listParentComments }
  }
}

/**
 * Action Async
 */

export function actFetchCommentsAsync({
  currentPage = 1,
  perPage = DEFAULT_PER_PAGE,
  postId,
  parentId
}) {
  return async dispatch => {
    try {
      const response = await CommentsService.getList({
        per_page: perPage,
        page: currentPage,
        post: postId,
        parent: parentId
      })

      const comments = response.data
      const totalItems = Number(response.headers['x-wp-total'])
      const totalPages = Number(response.headers['x-wp-totalpages'])
      
      dispatch(actFetchComments({
        currentPage,
        perPage,
        comments,
        totalItems,
        totalPages,
        parentId
      }))

      if (parentId === 0) {
        dispatch(actInitChildCommentPaging(comments))
      }

    } catch (err) {

    }
  }
}