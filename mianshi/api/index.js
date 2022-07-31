import request from './request'

export const reqCategoryList=()=>{
    return request({url:'/5232',method:'get'})
}