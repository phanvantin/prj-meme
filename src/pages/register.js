import { Link } from "react-router-dom"
import {  useState } from "react";
import { useDispatch } from "react-redux"
import {actRegisterAsync} from '../store/auth/actions'


const Register =()=>{
  // const history = useHistory();
  const dispatch = useDispatch()
  const [isTouch, setIsTouch] = useState(false)
  const [loading, setLoading] = useState(false)
  const [formData, setFormData] = useState({
    email: 'test03@gmail.com',
    password: '123123',
    fullname : '',
    repassword: ''

  });
  const [formError, setFormError] = useState({
    email: '',
    password: '',
    fullname : '',
    repassword: ''
  });
  function checkIsValid() {
    if (!isTouch) {
      // Giải quyết vấn đề ở đây
      //  - Gọi 2 thằng validate cho 2 fields thì show ra 2 error
      validate('username', formData.email)
      validate('username', formData.password)
      validate('username', formData.fullname)
      validate('password', formData.repassword)
      return false
    }

    if (!formError.email && !formError.password && formData.fullname && formData.repassword)  {
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

    const { email, password, repassword,fullname } = formData
    setLoading(true)
    dispatch(actRegisterAsync(email,fullname, password,repassword))  
      .then(res => {
        if (res && res.ok) {
          console.log(res.ok)
        } else {
          alert(res.error)

        }
      })
      .finally(() => setLoading(false))}
    return (
      <div>
      <div className="ass1-login">
        <div className="ass1-login__logo">
          <a href="index.html" className="ass1-logo">TCL Meme</a>
        </div>
        <div className="ass1-login__content">
          <p>Đăng ký một tài khoản</p>
          <div className="ass1-login__form">
            <form onSubmit={handleSubmit}>
              
              <input onChange={handleChange} value={formData.fullname}
                   name = "fullname" type="text" className="form-control" placeholder="Tên hiển thị" required />
                   {formError.fullname && <span className="form-control__error">{ formError.fullname }</span>}
              <input onChange={handleChange} value={formData.email}
                   name = "email" type="email" className="form-control" placeholder="Email" required />
                   {formError.email && <span className="form-control__error">{ formError.email }</span>}
              <input onChange={handleChange} value={formData.password}
                   name = "password" type="password" className="form-control" placeholder="Mật khẩu" required />
                   {formError.password && <span className="form-control__error">{ formError.password }</span>}
              <input onChange={handleChange} value={formData.repassword}
                   name = "repassword" type="password" className="form-control" placeholder="Nhập lại mật khẩu" required />
                   {formError.repassword && <span className="form-control__error">{ formError.repassword }</span>}
              <div className="ass1-login__send">
                <Link to="/login">Đăng nhập</Link>
                <button onClick={handleSubmit} type="submit" className="ass1-btn">Đăng ký</button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <footer>
        <div className="ass1-footer">
          <div className="container">
            <p className="text-center">Cộng đồng chế ảnh VietNam</p>
          </div>
        </div>
      </footer>
    </div>
            )
}
export default Register