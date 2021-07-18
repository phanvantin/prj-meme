
import { Link } from "react-router-dom"


const Profile =()=>{
    return (
        <div className="container">
        <div className="ass1-head-user">
          <div className="ass1-head-user__content">
            <div className="ass1-head-user__image"><a href="##"><img src="asset/images/cat-1634369_1920.jpg" alt="" /></a></div>
            <div className="ass1-head-user__info">
              <div className="ass1-head-user__info-head">
                <div className="ass1-head-user__name">
                  <span>Trần Công Lực</span>
                  <i><img src="asset/fonts/emotion/svg/Verified.svg" alt="" /></i>
                </div>
                <div className="w-100" />
                <a href="##" className="ass1-head-user__btn-follow ass1-btn">Theo dõi</a>
                <Link to="/change_password" className="ass1-head-user__btn-follow ass1-btn">Đổi mật khẩu</Link>
                <Link to="/change_profile" className="ass1-head-user__btn-follow ass1-btn">Profile</Link>
                {/* <a href="##" class="ass1-head-user__btn-options ass1-btn-icon"><i class="icon-Options"></i></a> */}
              </div>
              <div className="ass1-head-user__info-statistic">
                <div className="ass1-btn-icon"><i className="icon-Post" /><span>Bài viết: 9999</span></div>
                <div className="ass1-btn-icon"><i className="icon-Followers" /><span>Theo dõi: 99999</span></div>
                <div className="ass1-btn-icon"><i className="icon-Following" /><span>Đang theo dõi: 999</span></div>
                {/* <div class="ass1-btn-icon"><i class="icon-Upvote"></i><span>Up Vote: 999999</span></div> */}
              </div>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            </div>
          </div>
        </div>
        {/*sections*/}
        <div className="ass1-section__wrap row ass1-section__isotope-init">
          {/*section*/}
          <div className="grid-sizer" />
          <div className="ass1-section__item col-lg-6">
            <div className="ass1-section">
              <div className="ass1-section__head">
                <a href="single_post.html" className="ass1-section__avatar ass1-avatar"><img src="asset/images/avatar-02.png" alt="" /></a>
                <div>
                  <a href="##" className="ass1-section__name">Thanos</a>
                  <span className="ass1-section__passed">2 giờ trước</span>
                </div>
              </div>
              <div className="ass1-section__content">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et inventore obcaecati eum deserunt ut,
                  aperiam quas! Placeat blanditiis consequatur, deserunt facere iusto amet a ad suscipit laudantium unde
                  quidem perferendis!
                </p>
                <div className="ass1-section__image">
                  <a href="single_post.html"><img src="asset/images/microphone-1209816_1920.jpg" alt="" /></a>
                </div>
              </div>
              <div className="ass1-section__footer">
                <a href="##" className="ass1-section__btn-upvote ass1-btn-icon"><i className="icon-Upvote" /></a>
                <a href="##" className="ass1-section__btn-downvote ass1-btn-icon"><i className="icon-Downvote" /></a>
                <a href="##" className="ass1-section__btn-like ass1-btn-icon"><i className="icon-Favorite_Full" /><span>1,274</span></a>
                <a href="##" className="ass1-section__btn-comment ass1-btn-icon"><i className="icon-Comment_Full" /><span>982</span></a>
              </div>
            </div>
          </div>
          <div className="ass1-section__item col-lg-6">
            <div className="ass1-section">
              <div className="ass1-section__head">
                <a href="single_post.html" className="ass1-section__avatar ass1-avatar"><img src="asset/images/avatar-02.png" alt="" /></a>
                <div>
                  <a href="##" className="ass1-section__name">Thanos</a>
                  <span className="ass1-section__passed">2 giờ trước</span>
                </div>
              </div>
              <div className="ass1-section__content">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et inventore obcaecati eum deserunt ut,
                  aperiam quas! Placeat blanditiis consequatur, deserunt facere iusto amet a ad suscipit laudantium unde
                  quidem perferendis!
                </p>
                <div className="ass1-section__image">
                  <a href="single_post.html"><img src="asset/images/blog-rating.png" alt="" /></a>
                </div>
              </div>
              <div className="ass1-section__footer">
                <a href="##" className="ass1-section__btn-upvote ass1-btn-icon"><i className="icon-Upvote" /></a>
                <a href="##" className="ass1-section__btn-downvote ass1-btn-icon"><i className="icon-Downvote" /></a>
                <a href="##" className="ass1-section__btn-like ass1-btn-icon"><i className="icon-Favorite_Full" /><span>1,274</span></a>
                <a href="##" className="ass1-section__btn-comment ass1-btn-icon"><i className="icon-Comment_Full" /><span>982</span></a>
              </div>
            </div>
          </div>
          <div className="ass1-section__item col-lg-6">
            <div className="ass1-section">
              <div className="ass1-section__head">
                <a href="single_post.html" className="ass1-section__avatar ass1-avatar"><img src="asset/images/avatar-02.png" alt="" /></a>
                <div>
                  <a href="##" className="ass1-section__name">Thanos</a>
                  <span className="ass1-section__passed">2 giờ trước</span>
                </div>
              </div>
              <div className="ass1-section__content">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et inventore obcaecati eum deserunt ut,
                  aperiam quas! Placeat blanditiis consequatur, deserunt facere iusto amet a ad suscipit laudantium unde
                  quidem perferendis!
                </p>
                <div className="ass1-section__image">
                  <a href="single_post.html"><img src="asset/images/dress_owesom.jpg" alt="" /></a>
                </div>
              </div>
              <div className="ass1-section__footer">
                <a href="##" className="ass1-section__btn-upvote ass1-btn-icon"><i className="icon-Upvote" /></a>
                <a href="##" className="ass1-section__btn-downvote ass1-btn-icon"><i className="icon-Downvote" /></a>
                <a href="##" className="ass1-section__btn-like ass1-btn-icon"><i className="icon-Favorite_Full" /><span>1,274</span></a>
                <a href="##" className="ass1-section__btn-comment ass1-btn-icon"><i className="icon-Comment_Full" /><span>982</span></a>
              </div>
            </div>
          </div>
          <div className="ass1-section__item col-lg-6">
            <div className="ass1-section">
              <div className="ass1-section__head">
                <a href="single_post.html" className="ass1-section__avatar ass1-avatar"><img src="asset/images/avatar-02.png" alt="" /></a>
                <div>
                  <a href="##" className="ass1-section__name">Thanos</a>
                  <span className="ass1-section__passed">2 giờ trước</span>
                </div>
              </div>
              <div className="ass1-section__content">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et inventore obcaecati eum deserunt ut,
                  aperiam quas! Placeat blanditiis consequatur, deserunt facere iusto amet a ad suscipit laudantium unde
                  quidem perferendis!
                </p>
                <div className="ass1-section__image">
                  <a href="single_post.html"><img src="asset/images/frog-1530803_960_720.jpg" alt="" /></a>
                </div>
              </div>
              <div className="ass1-section__footer">
                <a href="##" className="ass1-section__btn-upvote ass1-btn-icon"><i className="icon-Upvote" /></a>
                <a href="##" className="ass1-section__btn-downvote ass1-btn-icon"><i className="icon-Downvote" /></a>
                <a href="##" className="ass1-section__btn-like ass1-btn-icon"><i className="icon-Favorite_Full" /><span>1,274</span></a>
                <a href="##" className="ass1-section__btn-comment ass1-btn-icon"><i className="icon-Comment_Full" /><span>982</span></a>
              </div>
            </div>
          </div>
        </div>
      </div>
            )
}
export default Profile