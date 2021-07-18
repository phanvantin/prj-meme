import { mapCleanMenuData } from "../../helpers/menus"

import { MenusService } from "../../services/menus"

/**
 * Action Types
 */
export const ACT_FETCH_MENU_BY_NAME = 'ACT_FETCH_MENU_BY_NAME'


/**
 * Actions
 */

export function actFetchMenuByName(name, menusData) {
  return {
    type: 'ACT_FETCH_MENU_BY_NAME',
    payload: { name, menusData }
  }
}

/**
 * Action Async
 */

export function actFetchMenuByNameAsync(name = 'main-menu-vi') {
  return async (dispatch) => {
    try {
      const response = await MenusService.getList(name)
      const menusData = response.data.items.map(mapCleanMenuData)
      
      dispatch(actFetchMenuByName(name, menusData))

    } catch(err) {

    }
  }
}






