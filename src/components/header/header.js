import {  useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"
import {actSetToken,actSetCurrentUser} from '../../store/auth/actions';
import Category from "./category";


const Header =()=>{
  const categories = useSelector(state=>state.Categories.category)
  const [isCategory,setIsCategory] = useState(false);
  
  useEffect(()=>{

    let hideCategory = document.querySelector("#container")

      hideCategory.addEventListener('click',()=> {
        setIsCategory(false)
      })
      if(isCategory === true){
        // fixx ko dc, vẫn nge sự kiện khi isCategory = true
        hideCategory.removeEventListener('click',()=>{ })
      }
    },[isCategory])
  const currentUser = useSelector(state=>state.Auth.currentUser)
  const dispatch = useDispatch();
  function handleLogout(evt) {
    evt.preventDefault()
    dispatch(actSetToken('',''))
    dispatch(actSetCurrentUser(null))
  }
    return (
        <header>
        <div className="ass1-header">
          <div className="container">
            <Link to="/" className="ass1-logo">
              TCL Meme
            </Link>
            {/* <div class="ass1-header__btn-dropdown ass1-btn-icon"><i class="icon-Arrow_Down"></i></div>
            <ul class="ass1-header__dropdown">
                <li><a href="##">Home</a></li>
                <li><a href="##">Single Post</a></li>
                <li><a href="##">Multiple Image Post</a></li>
                <li><a href="##">Single Video Post</a></li>
                <li><a href="##">User</a></li>
                <li><a href="##">Edit Post</a></li>
                <li><a href="##">Login</a></li>
                <li><a href="##">Signup</a></li>
            </ul> */}
            <nav>
              <ul className="ass1-header__menu">
                <li>
                  <a onClick={()=>setIsCategory(!isCategory)} href="##">Danh mục</a>
                  <div className="ass1-header__nav" style={{display: `${isCategory ? "block" : "none"}`}}>
                    <div className="container">
                      
                    <Category categories={categories}/>
                    </div>
                    <div className="ass1-header__menu-transition" style={{left: '319.594px', height: '30px', width: '73px'}} />
                  </div>
                </li>
                <li className="active">
                  <a href="##">Hot</a>
                  <div className="ass1-header__nav" style={{display: 'none'}}>
                    <div className="container">
                      <ul>
                        <li><a href="##">Funny</a></li>
                        <li><a href="##">Animals</a></li>
                        <li><a href="##">Anime &amp; Mâng</a></li>
                        <li><a href="##">Awesome</a></li>
                        <li><a href="##">Basketball</a></li>
                      </ul>
                      <ul>
                        <li><a href="##">Car</a></li>
                        <li><a href="##">Comic</a></li>
                        <li><a href="##">Cosplay</a></li>
                        <li><a href="##">Countryballs</a></li>
                        <li><a href="##">Classical Art Memes</a></li>
                      </ul>
                      <ul>
                        <li><a href="##">Girl</a></li>
                        <li><a href="##">History</a></li>
                        <li><a href="##">K-POP</a></li>
                        <li><a href="##">V-POP</a></li>
                        <li><a href="##">Pokémon</a></li>
                      </ul>
                      <ul>
                        <li><a href="##">School</a></li>
                        <li><a href="##">Star war</a></li>
                        <li><a href="##">Coder</a></li>
                        <li><a href="##">Travel</a></li>
                        <li><a href="##">Sport</a></li>
                      </ul>
                    </div>
                    <div className="ass1-header__menu-transition" />
                  </div>
                </li>
              </ul>
            </nav>
            <div className="ass1-header__search">
              <form action="#">
                <label>
                  <input type="search" name="search-text" className="form-control" placeholder="Nhập từ khóa ..." />
                  <i className="icon-Search" />
                </label>
              </form>
            </div>
            <Link to="/postpicture" className="ass1-header__btn-upload ass1-btn">
              <i className="icon-Upvote" /> Upload
            </Link>
            <ul className="header-nav__lists">
          {
            !currentUser 
              ? (
                <li className="user">
                  <Link to="/login"><i className="icons ion-person" /> Tài khoản</Link>
                </li>
              ) : (
                <div className="user">
                  <Link to="/profile" className="user_name"><i className="icons ion-person" />{ currentUser.fullname }</Link>
                  <div className="logout"><a href="/" onClick={handleLogout} >Đăng xuất</a></div>
                </div>
              )
          }
        </ul>
          </div>
        </div>
      </header>
             
              )
    
            }
export default Header