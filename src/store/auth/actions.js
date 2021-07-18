import { AuthService } from "../../services/auth";

export const ACT_SET_TOKEN = 'ACT_SET_TOKEN';
export const ACT_SET_CURRENT_USER = 'ACT_SET_CURRENT_USER';
// export const ACT_CHANGE_PASSWORD = 'ACT_CHANGE_PASSWORD';

export const actSetToken = (token,userid)=> {
  return {
    type: ACT_SET_TOKEN,
    payload: {token, 
      userid
    }
  }
}

export const actSetCurrentUser = (userData)=> {
  return {
    type: ACT_SET_CURRENT_USER,
    payload: {userData}
  }
}



export function actFetchMeAsync(userid) {
  return async dispatch =>{
    try {
      const response = await AuthService.getMe({userid})
      const userData= response.data.user
      dispatch(actSetCurrentUser(userData))
    }catch(err) {
      dispatch(actSetToken(''))
      dispatch(actSetCurrentUser(null))
      return {
        ok:false
      }
    }
  }
}


export function actLoginAsync(email,password) {
  return async dispatch =>{
    try {
      const response = await AuthService.login(email,password)
      const err = response.data.error
      if(response.data.status === 200) {
        const userid = response.data.user.USERID; 
        const token = response.data.token
        dispatch(actSetToken(token,userid))
        dispatch(actFetchMeAsync(userid))
        return {
          ok: true
        }
      } else {
          throw new Error(err)
        
      }
    }
    catch(err) {  
        return {
          ok: false,
          error: err
        }
    }
  }

}

export function actChangePassWordAsync(oldpass, newpass,passconfirm) {
  return async () =>{
    try {
        await AuthService.changePass({
        oldPassword:oldpass,
        newPassword:newpass,
        reNewPassword: passconfirm
      })
      
      return {
        ok: true
      }
    }
    catch(err) {  
      if(err.response && err.response.data) {
        const error = err.response.data.error
        return {
          ok:false,
          error
        }
      }
        return {
          ok: false,
          error: 'có lỗi xảy ra vui lòng thử lại sau'
        }
    }
  }

}

export function actRegisterAsync(email, fullname,password,repassword) {
  return async () =>{
    try {
      const response= await AuthService.register(email, fullname,password,repassword)
      const err = response.data.error
      if(response.data.status !== 200) {
        throw new Error(err)
      }
        return {
          ok: true
        }
      }
    catch(err) {  
        return {
          ok: false,
          error: err
        }
    }
  }

}

export function actChangeProfileAsync(fullname, gender,description,avatar) {
  return async () =>{
    try {
      await AuthService.changeInfoUser(
          {fullname,description,gender,avatar}
      )
      return {
        ok: true
      }
    }
    catch(err) {  
        return {
          ok: false,
          error: err
        }
    }
  }

}