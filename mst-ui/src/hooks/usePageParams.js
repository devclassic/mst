import { ref, onMounted } from 'vue'
import { onLoad } from '@dcloudio/uni-app'

export function usePageParams() {
  const params = ref({})

  // 小程序端最推荐：使用 onLoad 最早获取参数
  onLoad(options => {
    if (options && Object.keys(options).length > 0) {
      params.value = { ...options }
      console.log('【onLoad】成功获取页面参数：', params.value)
    }
  })

  function fetchParams() {
    // 如果已经拿到参数，就不再重复获取
    if (Object.keys(params.value).length > 0) return

    let result = {}

    // #ifdef H5
    try {
      const urlParams = new URLSearchParams(window.location.search)
      urlParams.forEach((value, key) => {
        let decoded = decodeURIComponent(value)

        // 基础类型转换
        if (decoded === 'true') decoded = true
        else if (decoded === 'false') decoded = false
        else if (!isNaN(decoded) && decoded.trim() !== '') decoded = Number(decoded)

        result[key] = decoded
      })
      console.log('【H5】URL 参数：', result)
    } catch (e) {
      console.warn('H5 获取 URL 参数失败', e)
    }
    // #endif

    // #ifndef H5
    try {
      const pages = getCurrentPages()
      const currentPage = pages[pages.length - 1]
      if (currentPage?.options) {
        result = { ...currentPage.options }
        console.log('【小程序】getCurrentPages 参数：', result)
      }
    } catch (e) {
      console.warn('小程序 getCurrentPages 获取失败', e)
    }
    // #endif

    if (Object.keys(result).length > 0) {
      params.value = result
    }
  }

  // H5 端兜底
  onMounted(() => {
    fetchParams()
    setTimeout(fetchParams, 100)
  })

  const getParam = (key, defaultValue = null) => {
    return params.value[key] ?? defaultValue
  }

  return {
    params,
    getParam,
    refresh: fetchParams,
  }
}
