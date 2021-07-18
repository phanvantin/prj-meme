import {  useEffect, useState } from "react";
import { useDispatch } from "react-redux"
import { Link, useHistory } from "react-router-dom"
import {actLoginAsync} from '../store/auth/actions'
import {actShowHeader} from '../store/page/action'



function Login(){
  const history = useHistory();
  const dispatch = useDispatch()
  const [isTouch, setIsTouch] = useState(false)
  const [loading, setLoading] = useState(false)
  const [formData, setFormData] = useState({
    email: 'test03@gmail.com',
    password: '123123'
  });
  const [formError, setFormError] = useState({
    email: '',
    password: ''
  });
  useEffect(()=>{
    dispatch(actShowHeader())
  },[dispatch])
  function checkIsValid() {
    if (!isTouch) {
      // Giải quyết vấn đề ở đây
      //  - Gọi 2 thằng validate cho 2 fields thì show ra 2 error
      validate('username', formData.email)
      validate('password', formData.password)
      return false
    }

    if (!formError.email && !formError.password) {
      return true
    }
    return false
  }

  function validate(key, value) {
    let error = ''
    
    if (key === 'password') {
      if (!value) {
        error = 'Mật khẩu không được rỗng'
      } else if (value.length < 6) {
        error = 'Mật khẩu phải ít nhất 6 ký tự'
      }
    } else if (key === 'email') {
      if (!value) {
        error = 'Tên đăng nhập không được rỗng'
      }
    }

    setFormError({
      ...formError,
      [key]: error
    })
  }

  function handleChange(evt) {
    if (!isTouch) {
      setIsTouch(true)
    }

    validate(evt.target.name, evt.target.value.trim())
    setFormData({
      ...formData,
      [evt.target.name]: evt.target.value
    })
  }
  function handleSubmit(evt) {
    evt.preventDefault()
    if (loading) return

    const isValid = checkIsValid()

    if (!isValid) return

    const { email, password } = formData
    setLoading(true)
    dispatch(actLoginAsync(email, password))  
      .then(res => {
        if (res && res.ok) {
          history.push('/')
        } else {
          alert(res.error)
        }
      })
      .finally(() => setLoading(false))}
  
    return (
        <div className="ass1-login">
        <div className="ass1-login__logo">
          <a href="index.html" className="ass1-logo">TCL Meme</a>
        </div>
        <div className="ass1-login__content">
          <p>Đăng nhập</p>
          <div className="ass1-login__form">
            <form onSubmit={handleSubmit}>
              <input onChange={handleChange} value={formData.email}
                   name = "email" type="text" className="form-control" placeholder="Email" required />
                   {formError.email && <span className="form-control__error">{ formError.email }</span>}
              <div className="ass1-input-copy">
                <input onChange={handleChange} type="password" value={formData.password}
                   name="password" className="form-control" placeholder="Mật khẩu" required />
                   {formError.password && <span className="form-control__error">{ formError.password }</span>}

                <a href="##">Copy</a>
              </div>
              <div className="ass1-login__send">
                <Link to="/register">Đăng ký một tài khoản</Link>
                <button type="submit" onClick={handleSubmit} className="ass1-btn">Đăng nhập</button>
              </div>
            </form>
          </div>
        </div>
      </div>
            )
}
export default Login