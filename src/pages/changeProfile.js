import { useState } from "react"
import { useDispatch } from "react-redux"



import {actChangeProfileAsync} from '../store/auth/actions'




const ChangeProfile =()=>{
  const dispatch = useDispatch()
  const [loading, setLoading] = useState(false)
  const [profileImg, setProfileImg] = useState("asset/images/user-02.jpg")
  const [formData, setFormData] = useState({
    fullname: '123123',
    gender: '',
    description: '1231234',
    avatar: '',

  });
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
        avatar: e.target.files[0].name
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
    if (loading) return
    
    const { fullname, gender,description,avatar } = formData
    setLoading(true)
    dispatch(actChangeProfileAsync(fullname, gender,description,avatar))  
      .then(res => {
        if (res && res.ok) {
          console.log(res.ok)
        } else {
          console.log(res.error)
          // alert(res.error)
        }
      })
      .finally(() => setLoading(false))
  }
  // const imageHandler = (e) => {
  //   const reader = new FileReader();
  //   reader.onload = () =>{
  //     if(reader.readyState === 2){
  //       setProfileImg(reader.result)
  //     }
  //   }
  //   reader.readAsDataURL(e.target.files[0])
  // };
    return (
      <div className="ass1-login">
        <div className="ass1-login__content">
          <p>Profile</p>
          <div className="ass1-login__form">
            <div className="avatar">
              <img src={profileImg} alt="" />
            </div>
            <form onSubmit={handleSubmit}>
              <input onChange={handleChange} value={formData.fullname} name="fullname" type="text" className="form-control" placeholder="Tên ..." required />
              <select name="gender" onChange={handleChange} className="form-control">
                <option value>Giới tính</option>
                <option value="nam">Nam</option>
                <option value="nữ">Nữ</option>
              </select>
              <input onChange={handleChange} type="file" name="avatar" placeholder="Ảnh đại diện" className="form-control"/>
              <textarea onChange={handleChange} value={formData.description} name="description" className="form-control" cols={30} rows={5} placeholder="Mô tả ngắn ..."  />
              <div className="ass1-login__send justify-content-center">
                <button onClick={handleSubmit} type="submit" className="ass1-btn">Cập nhật</button>
              </div>
            </form>
          </div>
        </div>
      </div>
            )
}
export default ChangeProfile