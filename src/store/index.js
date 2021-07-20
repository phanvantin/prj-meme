import { createStore, applyMiddleware, combineReducers } from 'redux'

import postsReducer from './posts/reducer'
import authReducer from './auth/reducer'
import isShowHeader from './page/reducer'
// import menusReducer from './menus/reducer'
import categoriesReducer from './categories/reducer'
// import commentsReducer from './comments/reducer'


import thunk from 'redux-thunk'
import logger from 'redux-logger'

const rootReducer = combineReducers({
  Posts: postsReducer,
  Auth: authReducer,
  isHeader: isShowHeader,
  Categories: categoriesReducer,
  // Menus: menusReducer,
  // Comments: commentsReducer
})
const middlewares = applyMiddleware(thunk, logger)

const store = createStore(rootReducer, middlewares)

export default store