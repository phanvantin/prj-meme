import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { actFetchpostAsyn } from '../store/posts/actions'
import Button from '../components/common/Button';


export function UsePostsPaging() {
  const dispatch = useDispatch()
  const [isLoading, setIsLoading] = useState(false)
  const postListPaging = useSelector(state => state.Posts)
  const isLoadMore = postListPaging.isLoadMore
  const posts = postListPaging.postList.List
  const currentPage = postListPaging.postList.currPage
  function handleLoadMore() {
    if (isLoading) {
      return
    }

    setIsLoading(true)
    dispatch(actFetchpostAsyn({
        currPage: currentPage + 1,
    }))
    .finally(() => {
      setIsLoading(false)   
    })
  }
  function renderButtonLoadmore() {
    return (
      isLoadMore &&(
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
    renderButtonLoadmore
  }
}