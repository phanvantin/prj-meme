

import { ACT_SET_CATEGORY,ACT_GET_POST_BY_CATEGORY,ACT_SET_LOAD_MORE} from './action'


const initState = {
    category: [],
    listPostByCategory: {
        List: [],
        currPage: 0,
        pagesize: 0,
        categoriId: 0
      },
      isLoadMore: true,
}

function categoriesReducer(categoriesState = initState, action) {
    switch (action.type) {
        case ACT_SET_LOAD_MORE:
			return {
        ...categoriesState,
        isLoadMore: false
      }
        case ACT_SET_CATEGORY:
            return {
                ...categoriesState,
                category: action.payload.categories
            }
            case ACT_GET_POST_BY_CATEGORY:
                return {
                    ...categoriesState,
                    listPostByCategory: {
                        ...categoriesState.listPostByCategory,
                        List: categoriesState.listPostByCategory.categoriId !== action.payload.cateId ? action.payload.categories :
                           [ ...categoriesState.listPostByCategory.List,
                            ...action.payload.categories,
                    ],
                    currPage:action.payload.currentPage,
                    pagesize:action.payload.pagesize,
                    categoriId:action.payload.cateId
                }
            }
    
        default:
            return categoriesState;
    }
}
export default categoriesReducer