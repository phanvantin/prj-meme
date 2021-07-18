import {  useState } from "react";
import { useDispatch } from "react-redux"
import {actChangePassWordAsync} from '../store/auth/actions'

const ChangePass =()=>{
  const dispatch = useDispatch()
  const [isTouch, setIsTouch] = useState(false)
  const [loading, setLoading] = useState(false)
  const [formData, setFormData] = useState({
    oldpass: '123123',
    newpass: '1231234',
    passconfirm: '1231234'
  });
  const [formError, setFormError] = useState({
    oldpass: '',
    newpass: '',
    passconfirm: ''
  });
  function checkIsValid() {
    if (!isTouch) {
      // Giải quyết vấn đề ở đây
      //  - Gọi 2 thằng validate cho 2 fields thì show ra 2 error
      validate('oldpass', formError.oldpass)
      validate('newpass', formError.newpass)
      validate('passconfirm', formError.passconfirm)
      return false
    }
    if (!formError.oldpass && !formError.newpass && !formError.passconfirm) {
      return true
    }
    return false
  }

  function validate(key, value) {
    let error = ''
    
      if (!value) {
        error = 'Mật khẩu không được rỗng'
      } else if (value.length < 6) {
        error = 'Mật khẩu phải ít nhất 6 ký tự'
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

    const { oldpass, newpass,passconfirm } = formData
    setLoading(true)
    dispatch(actChangePassWordAsync(oldpass, newpass,passconfirm))  
      .then(res => {
        if (res && res.ok) {
          console.log(res.ok)
        } else {
          console.log(res.error)
          // alert(res.error)
        }
      })
      .finally(() => setLoading(false))}

    return (
      <div className="ass1-login">
        <div className="ass1-login__content">
          <p>Đổi mật khẩu</p>
          <div className="ass1-login__form">
            <form onSubmit={handleSubmit}>
              <input onChange={handleChange} value={formData.oldpass} name="oldpass" type="password" className="form-control" placeholder="Mật khẩu cũ" required />
              {formError.oldpass && <span className="form-control__error">{ formError.oldpass }</span>}
              <input onChange={handleChange} value={formData.newpass} name="newpass" type="password" className="form-control" placeholder="Mật khẩu mới" required />
              {formError.newpass && <span className="form-control__error">{ formError.newpass }</span>}
              <input onChange={handleChange} value={formData.passconfirm} name="passconfirm" type="password" className="form-control" placeholder="Xác nhận mật khẩu mới" required />
              {formError.passconfirm && <span className="form-control__error">{ formError.passconfirm }</span>}

              <div className="ass1-login__send justify-content-center">
                <button onClick={handleSubmit} type="submit" className="ass1-btn">Gửi</button>
              </div>
            </form>
          </div>
        </div>
      </div>

            )
}
export default ChangePass