import { getDefaultPaging } from "../../helpers/paging"
import { 
  ACT_FETCH_PARENT_COMMENTS,
  ACT_FETCH_CHILD_COMMENTS,
  ACT_INIT_CHILD_COMMENT_PAGING
} from './actions'

const initState ={
  parentPaging: getDefaultPaging(),
  hashChildPaging: { }
}

function reducer(commentsState = initState, action) {
  switch (action.type) {
    case ACT_FETCH_PARENT_COMMENTS:
      return {
        ...commentsState,
        parentPaging: {
          ...commentsState.parentPaging,
          list: action.payload.currentPage === 1 
            ? action.payload.comments 
            : [
              ...commentsState.parentPaging.list,
              ...action.payload.comments
            ],
          currentPage: action.payload.currentPage,
          perPage: action.payload.perPage,
          totalItems: action.payload.totalItems,
          totalPages: action.payload.totalPages
        }
      }
    case ACT_FETCH_CHILD_COMMENTS:
      const hashKeyParentId = 'parent-' + action.payload.parentId 
      return {
        ...commentsState,
        hashChildPaging: {
          ...commentsState.hashChildPaging,
          [hashKeyParentId]: {
            ...commentsState.hashChildPaging[hashKeyParentId],
            list: action.payload.currentPage === 1 
              ? action.payload.comments 
              : [
                ...commentsState.hashChildPaging[hashKeyParentId].list,
                ...action.payload.comments
              ],
            currentPage: action.payload.currentPage,
            perPage: action.payload.perPage,
            totalItems: action.payload.totalItems,
            totalPages: action.payload.totalPages
          }
        }
      }
    case ACT_INIT_CHILD_COMMENT_PAGING:

      let newHashChildPaging = {
        ...commentsState.hashChildPaging
      }

      for (let index = 0; index < action.payload.listParentComments.length; index++) {
        const parentCmt = action.payload.listParentComments[index];
        const parentCmtId = parentCmt.id
        const key = 'parent-' + parentCmtId
        const value = getDefaultPaging()

        if (!newHashChildPaging[key]) {
          newHashChildPaging[key] = value
        }
      }

      return {
        ...commentsState,
        hashChildPaging: newHashChildPaging
      }
    default:
      return commentsState
  }
}

export default reducer