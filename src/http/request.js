import axios from 'axios'
import NProgress from 'nprogress' // progress bar
import { notification } from 'ant-design-vue';
import { VueAxios } from './axios'

// 创建 axios 实例
const request = axios.create({
  // API 请求的默认前缀
  timeout: 30000, // 请求超时时间
  headers: {
    'x-tai-identity':
      'eyJhbGciOiJkaXIiLCJlbmMiOiJBMjU2R0NNIiwia2lkIjoiYm9rZWdkIn0..56oK1Iubnews7Tqq.aOFuxln_lSFZZRmX4YkTPBIzgiw6BhISNEUMCF17Jy1I9VRn_1uf51WJApEWCSVqh5Ep8xYPf35b3UrhCUZU5RgulU4QURTYKX4XOG_Rmj_YwXEH1rHEkjpBUQHeswekwMrexbAG4kKyFDznO6T_M0GjsqRDz7mdsIQ6N3ySSUwFs7PSwqzS2tWvr7RzYIW-kiJ70aZkfLtfkEmqVvCcsVPc0WQzycrzaOu4n0DvZO6T7LXdUUyiJEvYcAsnZKvvpDcs2A78V7ZcGfvnGacn-zEI3G_Hj5OCLYJPKu8Uqv_Kmk7Qd1FSq6G2ZD_c9Qc7iFNG1qe0FFwFpA4QhtGCq8yE0763GRuY-5buH9vKPyT4o0EREUwWgXnx2ymbraqxJ6N02M9EtsPjkYta_s9w3330cdfO0tbRZG77jUpaDH1Ot8OMcu94oaHFq1Q_G_73ygomMwwmojlJ-EkMrbcDdgYxD4Mz2--vns2hXDamIa0m9_MZCfl38HQW5FJg-xqH4wSoZ3uotLc-egR3-ShJZEXSFyMy-ggz4pUzH4M4urhFT4UGoVJO8ES1UgJbDMVq5UnL1YliMs_O6oq6g2_DcvKDIB3BEfyrxTO0aa_5xrCjWj0MX2DgcO53zds9o_mDFagDj6ifRYDX1crL53FqAFRN89r90ZcIOGy0vdRrW_3CWZqQku8hb9jT2dDlkFCsmjcuvPjUSvdL876fHPulHd_dkZshYMyj3HuEMPQznX9eBESQ_FoFKUuvzHEg9eUm_P8xX_pLKH2mnc8bei-_VShYyHRY9ykhhSSQ5szsb7IzR-Rwhljjc5FsN1qKfh_xGGs-rw8-QNJmtXXJc6hvCwUAYwuFMeGVcoO4-FpMkS6fhsxDmxJw7XWFt4hAmKBnEP1zVusr6bvY2PE4MWo3CdrNwFyAMTZ7NWRb-UDmDNb7hnWyMmJOjH1LJSZxgH_7tJ8vkZosl719pPLTzS2ATJg_avgnyVnB23Z6TgCohwGbwX2BqX92-OJEzTzpZQuSpHXy_N62sneyxdPs8VEW0Ctv3HpcRcyJrLmuKc6QS49PL3DaoKzeX5Cib953paRLx_ENZlKN8jntlsyiWmEwxQCEm8M2u37PfaEhpGNR-x1utTJuPK8s1MUKsjhu411X.1t04nlMVWLOl6t0mnHWnfQ',
    // 'Content-Type': 'application/json; charset=utf-8',
    // staffname: 'v_yymyyang',
  },
})

// 异常拦截处理器
const errorHandler = (error) => {
  if (error.response) {
    const data = error.response.data
    // 从 localstorage 获取 token
    if (error.response.status === 403) {
      notification.error({
        message: 'Forbidden',
        description: data.message
      })
    }
    if (error.response.status === 401 && !(data.result && data.result.isLogin)) {
      NProgress.done()
      notification.error({
        message: '无权限',
        description: data.log
      })
      document.getElementById('app').innerHTML = data.log
    }
  }
  return Promise.reject(error)
}

// request interceptor
request.interceptors.request.use((config) => {
  return config
}, errorHandler)

// response interceptor
request.interceptors.response.use((response) => {
  return response.data
}, errorHandler)

const installer = {
  vm: {},
  install (Vue) {
    Vue.use(VueAxios, request)
  }
}

export default request

export { installer as VueAxios, request as axios }