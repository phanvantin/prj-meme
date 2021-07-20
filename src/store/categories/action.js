import {CategoryService} from '../../services/category'

export const ACT_SET_CATEGORY ='ACT_SET_CATEGORY'
export const ACT_GET_POST_BY_CATEGORY ='ACT_GET_POST_BY_CATEGORY'
export const ACT_SET_LOAD_MORE = 'ACT_SET_LOAD_MORE'



export const actSetCategory = ({categories}) => {
    return {
        type: ACT_SET_CATEGORY,
        payload: {categories}
    }
}

export const actSetPostByCategory =({categories,pagesize,currentPage,cateId})=>{
    return {
        type: ACT_GET_POST_BY_CATEGORY,
        payload: {categories,pagesize,currentPage,cateId}
    }
}
export function actSetLoadMore () {
    return {
      type: ACT_SET_LOAD_MORE,
    }
  }
  







export function actGetCategoryByIdAsync({categoryId,currPage}) {
    return async (dispatch) =>{
        try {
            const response = await CategoryService.getListById({tagIndex:Number(categoryId),currPage})
            const categories = response.data.posts
            const pagesize = response.config.params.pagesize
            const currentPage = response.config.params.currPage
            const cateId = response.config.params.tagIndex
            if(categories.length < 3) {
                dispatch(actSetLoadMore())
              }
            dispatch(actSetPostByCategory({categories,pagesize,currentPage,cateId}))
            return{
                ok:true
            }
        }catch(err){
            return {
                ok:false
            }
        }
    }
}


export function actGetCategoryAsync() {
    return async (dispatch)=>{
        try {
            const response = await CategoryService.getList()
            const categories = response.data.categories
            dispatch(actSetCategory({categories}))
        }catch(err) {
            return {
                ok:false,
                error:err
            }
        }
    }
}