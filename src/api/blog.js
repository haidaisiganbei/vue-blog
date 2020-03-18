import axios from './index'

export const getBlogs = () => {
  return axios.request({
    url: '/blog/list',
    methed: "get"
  })
}


export const getBlog = ({id})=>{
  return axios.request({
    url:`/blog/${id}`,
    methed:'get'
  })
}

export const addBlog = ({blog})=>{
  return axios.request({
    url:'/blog/add',
    methed:"post",
    data:{
      blog
    }
  })
}
