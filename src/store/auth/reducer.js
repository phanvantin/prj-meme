
import { ACT_SET_TOKEN,ACT_SET_CURRENT_USER} from './actions'

const initState = {
  token:  localStorage.getItem('access_token') || '',
  currentUser: null,
  userid: localStorage.getItem('access_user') || ''
}

function authReducer(authReducer = initState, action) {
  switch (action.type) {
    case ACT_SET_TOKEN:
      if  (action.payload.token && action.payload.userid) {
        localStorage.setItem('access_token',action.payload.token)
        localStorage.setItem('access_user',action.payload.userid)
      } else {
        localStorage.removeItem('access_token',action.payload.token)
        localStorage.removeItem('access_user',action.payload.userid)
      }
      return {
        ...authReducer,
        token: action.payload.token
      }
    case ACT_SET_CURRENT_USER:
      return {
        ...authReducer,
        currentUser:action.payload.userData
      }
  
    default:
      return authReducer
  }
}

export default authReducer