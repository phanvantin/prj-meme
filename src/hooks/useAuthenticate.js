// 1. bắt buộc phải đăng nhập mới được phép truy cập (dashboard, user profile, change password, ..)
// 2. bắt buộc CHƯA đăng nhập mới vào được (login, signup)
// 3. default: ai cũng vô được
import { useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { useSelector } from 'react-redux'

function useNotAuthenticated() {
  const history = useHistory()
  const token = useSelector(state => state.Auth.token)

  useEffect(() => {
    if (token) {
      history.push('/')
    }
  }, [token, history])
}

function useAuthenticated() {
  const history = useHistory()
  const token = useSelector(state => state.Auth.token)

  useEffect(() => {
    if (!token) {
      history.push('/login')
    }
  }, [token, history])
}

export {
  useAuthenticated,
  useNotAuthenticated
}