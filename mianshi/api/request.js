import axios from 'axios'

const request=axios.create({
    baseURL:'/api',
    timeout:5000
})

request.interceptors.request.use(config=>{
    // nprogress.start()
    return config
})

request.interceptors.response.use((res)=>{
    // nprogress.done()
    return res.data
},(err)=>{
    return Promise.reject(new Error('fail'))
})
export default request