import { useEffect } from "react"
import { useDispatch} from "react-redux"
import { UsePostsPaging } from "../hooks/usePostPaging";
import PostItem from "../components/postItem";
import { actFetchpostAsyn } from "../store/posts/actions";



const Home =()=>{

  const dispatch = useDispatch();
  const data = UsePostsPaging()
  const posts =data.posts
  const renderButtonLoadmore = data.renderButtonLoadmore
  useEffect(()=>{
    dispatch(actFetchpostAsyn())
  },[dispatch])
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
              {renderButtonLoadmore()}
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
export default Home