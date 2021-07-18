import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { actFetchCommentsAsync } from '../store/comments/actions';
import Button from '../components/common/Button';

const defaultFnSelector = state => state.Comments.parentPaging

export function useCommentsPaging({
  extraParams = {},
  fnSelector = defaultFnSelector
} = {}) {
  const dispatch = useDispatch()
  const [isLoading, setIsLoading] = useState(false)
  const commentsPaging = useSelector(fnSelector)
  const comments = commentsPaging.list
  const totalPages = commentsPaging.totalPages
  const totalItems = commentsPaging.totalItems
  const currentPage = commentsPaging.currentPage

  const hasMoreComments = currentPage < totalPages

  function handleLoadMore(evt) {
    evt.preventDefault()

    if (isLoading) {
      return
    }

    setIsLoading(true)
    dispatch(actFetchCommentsAsync({
      currentPage: currentPage + 1,
      ...extraParams
    }))
    .finally(() => {
      setIsLoading(false)
    })
  }
  
  function renderButtonLoadmore() {
    return (
      hasMoreComments && (
        <div className="text-center">
          <Button 
            variant="primary"
            isLoading={isLoading}
            onClick={handleLoadMore}
          >Tải thêm</Button>
        </div>
      )
    )
  }

  return {
    comments,
    totalItems,
    handleLoadMore,
    renderButtonLoadmore
  }
}