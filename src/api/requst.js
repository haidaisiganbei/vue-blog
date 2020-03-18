
import axios from 'axios'
import { baseURL } from '@/config/index.js'
import store from '@/store'
import { Loading } from 'element-ui';
class Http {
  constructor(baseUrl = baseURL) {
    this.baseUrl = baseUrl
  }

  intercepters(instance) {
    let loadingInstance = Loading.service({ fullscreen: true, text: "数据加载中" });
    // 请求拦截器
    instance.intercepters.request.use(config => {
      console.log("config",config);
      return config
    }, error => {
      return Promise.reject(error)
    })
    // 相应拦截器
    instance.intercepters.response.use(res=>{
      console.log("res",res);
      loadingInstance.close();
      return res
    },error=>{
      loadingInstance.close();
      this.$message.error('加载失败');
      return Promise.reject(error)
    })

  }
  getInstanceConfig() {
    const config = {
      baseUrl: this.baseUrl,
      headers: {
        "content-type":"application/json",
        "token": store.state.token
      }
    }
    return config
  }

  request(options) {
    const instance = axios.create()
    options = Object.assign(this.getInstanceConfig(), options)
    console.log(instance);

    // this.intercepters(instance)
    return instance(options)
  }
}

export default Http
