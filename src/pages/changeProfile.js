
import axios from 'axios'
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"



import {actFetchMeAsync} from '../store/auth/actions'




const ChangeProfile = ()=>{
  const dispatch = useDispatch()
  const currentUser = useSelector(state=> state.Auth.currentUser)
  const [profileImg, setProfileImg] = useState("")
  const [formData, setFormData] =  useState({
    fullname: '',
    gender: '',
    description: '',
    avatar: '',

  });
  useEffect(()=>{
    currentUser &&setProfileImg(currentUser.profilepicture);
    currentUser &&
    setFormData((initFormData)=>{
      return {
        ...initFormData,
        fullname: currentUser.fullname,
        description: currentUser.description,
        gender: currentUser.gender
      }
    })

  },[currentUser])
  
  const userid = useSelector(state=>state.Auth.userid);
  function handleChange(e) {
    
    if(e.target.name === "avatar") {
      const reader = new FileReader();
      reader.onload = () =>{
        if(reader.readyState === 2){
          setProfileImg(reader.result)
        }
      }
      reader.readAsDataURL(e.target.files[0])
      setProfileImg(reader.result)
      setFormData({
        ...formData,
        avatar: e.target.files[0]
      })
    }else {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value
      })
    }
  }
  function handleSubmit(e) {
e.preventDefault()
var bodyFormData = new FormData();
    const { fullname, gender,description,avatar } = formData

  bodyFormData.append('fullname',fullname);
  bodyFormData.append('gender',gender);
  bodyFormData.append('description',description);
  bodyFormData.append('avatar',avatar);

axios({
  method: "post",
  url: "http://api-meme-zendvn-01.herokuapp.com/api//member/update.php",
  data: bodyFormData,
  headers: { "Content-Type": "multipart/form-data",
  Authorization: 'Bearer ' + localStorage.getItem('access_token')
},
})
  .then(function () {
    dispatch(actFetchMeAsync(userid))
  })
  .catch(function (response) {
    //handle error
    console.log(response);
  });
   
  }
    return (
      <div className="ass1-login">
        <div className="ass1-login__content">
          <p>Profile</p>
          <div className="ass1-login__form">
            <div className="avatar">
              <img src={profileImg} alt="" />
            </div>
            <form onSubmit={handleSubmit}>
              <input onChange={handleChange} value={formData.fullname} name="fullname" type="text" className="form-control" placeholder="T??n ..." required />
              <select name="gender" onChange={handleChange} className="form-control">
                <option value>Gi???i t??nh</option>
                <option value="nam">Nam</option>
                <option value="n???">N???</option>
              </select>
              <input onChange={handleChange} type="file" name="avatar" placeholder="???nh ?????i di???n" className="form-control"/>
              <textarea onChange={handleChange} value={formData.description} name="description" className="form-control" cols={30} rows={5} placeholder="M?? t??? ng???n ..."  />
              <div className="ass1-login__send justify-content-center">
                <button onClick={handleSubmit} type="submit" className="ass1-btn">C???p nh???t</button>
              </div>
            </form>
          </div>
        </div>
      </div>
            )
}
export default ChangeProfile