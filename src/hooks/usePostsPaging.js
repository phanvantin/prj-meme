import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { actFetchPostsAsync } from '../store/posts/actions'
import Button from '../components/common/Button';


export function usePostsPaging({
  extraParams = {}
} = {}) {
  const dispatch = useDispatch()
  const [isLoading, setIsLoading] = useState(false)
  const articlesPaging = useSelector(state => state.Posts.articlesPaging)
  const posts = articlesPaging.list
  const totalPages = articlesPaging.totalPages
  const totalItems = articlesPaging.totalItems
  const currentPage = articlesPaging.currentPage

  const hasMorePosts = currentPage < totalPages

  function handleLoadMore() {
    if (isLoading) {
      return
    }

    setIsLoading(true)
    dispatch(actFetchPostsAsync({
      currentPage: currentPage + 1,
      ...extraParams
    }))
    .finally(() => {
      setIsLoading(false)
    })
  }
  
  function renderButtonLoadmore() {
    return (
      hasMorePosts && (
        <div className="text-center">
          <Button 
            variant="primary"
            isSizeLarge 
            isLoading={isLoading}
            onClick={handleLoadMore}
          >Tải thêm</Button>
        </div>
      )
    )
  }

  return {
    posts,
    totalItems,
    renderButtonLoadmore
  }
}