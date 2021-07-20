import { useEffect } from "react"
import { useDispatch, useSelector} from "react-redux"
import PostItem from "../components/postItem";
import { useParams } from "react-router-dom";
import { actGetCategoryByIdAsync } from "../store/categories/action";
import Button from "../components/common/Button";



const PostCategories =()=>{
  const params = useParams()
  const dispatch = useDispatch();
  const categoryId = params.id
  useEffect(()=>{
    dispatch(actGetCategoryByIdAsync({categoryId})) 
  },[dispatch,categoryId])

  const postsCategories = useSelector(state=>state.Categories.listPostByCategory)
  const posts = postsCategories.List
  const currentPage =postsCategories.currPage;

  const handleLoadMore =()=>{
    dispatch(actGetCategoryByIdAsync({
      currPage: currentPage+1,
      categoryId
  }))
  }
    return (
        <div className="container">
        {/*sections*/}
        <div className="row">
          <div className="col-lg-8">
            <div className="ass1-section__list">
            {
              posts.map((post,index)=>{
                return (
                  <PostItem key={index}  post={post}/>
                )
              })
            }
                <div className="text-center">
                  <Button 
                    variant="primary"
                    isSizeLarge 
                    onClick={handleLoadMore}
                  >Tải thêm</Button>
                </div>
              {/* {renderButtonLoadmore()} */}
            </div>
          </div>
          <div className="col-lg-4">
            <aside className="ass1-aside">
              <div className="ass1-content-head__t">
                <div>Bài viết gần đây của bạn.</div>
              </div>
              <div>Vui lòng đăng nhập để xem nội dung này
                <a href="##">Đăng nhập</a>
              </div>
            </aside>
          </div>
        </div>
      </div>
    
    )
}
export default PostCategories