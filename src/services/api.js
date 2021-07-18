import axios from 'axios'

const api = {
  call: () => axios.create({
    baseURL: 'http://api-meme-zendvn-01.herokuapp.com/api'
  }),
  callWithToken: () => axios.create({
    baseURL: 'http://api-meme-zendvn-01.herokuapp.com/api',
    headers: {
      Authorization: 'Bearer ' + localStorage.getItem('access_token')
    }
  })
}

export default api