import { ACT_FETCH_MENU_BY_NAME } from "./actions"

const initState = {
  mainMenu: [],
  footerMenu: []
}

function menusReducer(menusState = initState, action) {
  switch (action.type) {
    case ACT_FETCH_MENU_BY_NAME:
      
      if (action.payload.name === 'main-menu-vi') {
        return {
          ...menusState,
          mainMenu: action.payload.menusData
        }
      } else if (action.payload.name === 'footer-menu') {
        return {
          ...menusState,
          footerMenu: action.payload.menusData
        }
      }
      
      return menusState

    default:
      return menusState
  }
}

export default menusReducer