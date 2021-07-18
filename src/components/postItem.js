



const PostItem =({post})=>{
    return (
      <div className="ass1-section__item">
      <div className="ass1-section">
        <div className="ass1-section__head">
          <a href="bai-viet-chi-tiet.html" className="ass1-section__avatar ass1-avatar"><img src={post.profilepicture} alt="" /></a>
          <div>
            <a href="bai-viet-chi-tiet.html" className="ass1-section__name">{post.fullname}</a>
            <span className="ass1-section__passed">2 giờ trước</span>
          </div>
        </div>
        <div className="ass1-section__content">
          <p>{post.post_content}</p>
          <div className="ass1-section__image">
            <a href="bai-viet-chi-tiet.html"><img src={post.url_image} alt="" /></a>
          </div>
        </div>
        <div className="ass1-section__footer">
          <a href="##" className="ass1-section__btn-comment ass1-btn-icon"><i className="icon-Comment_Full" /><span>982</span></a>
        </div>
      </div>
    </div>
  )

}
export default PostItem