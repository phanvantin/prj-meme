import api from './api'

export const MenusService = {
  getList(name = 'main-menu-vi') {
    return api.call().get('/menus/v1/menus/' + name)
  }
} 
