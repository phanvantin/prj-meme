import api from './api'

export const AuthService = {
  login(email, password) {
    return api.call().post('/member/login.php', {
      email,
      password
    })
  },
  register(email, fullname,password,repassword) {
    return api.call().post('/member/register.php', {
      email,
      fullname,
      password,
      repassword
    })
  },
  changePass(
    {oldPassword,newPassword,reNewPassword} = {}) {
    return api.callWithToken().post('/member/password.php', {
      oldPassword, newPassword,reNewPassword
    })
  },
  getMe({userid =1} = {}) {
    return api.callWithToken().get('/member/member.php',{params: {userid}})
  }

} 


