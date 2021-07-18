import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import PostItem from "../components/postItem";
import { actFetchpostAsyn } from "../store/posts/actions";


const Home =()=>{
  const dispatch = useDispatch();
  const posts = useSelector(state=>state.Posts.postList);
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
              <button className="load-more ass1-btn"><span>Xem thêm</span></button>
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