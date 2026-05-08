import { onLoad } from '@dcloudio/uni-app'
import { ref, onMounted } from 'vue'

export function usePageParams() {
  const params = ref({})

  // 微信小程序：通过 onLoad 生命周期获取
  onLoad(options => {
    if (options) {
      params.value = { ...options }
    }
  })

  // H5：通过 URL 解析获取（onLoad 在 H5 不可靠）
  onMounted(() => {
    // #ifdef H5
    const urlParams = new URLSearchParams(window.location.search)
    const h5Params = {}
    urlParams.forEach((value, key) => {
      h5Params[key] = value
    })

    // 合并：H5 中 onLoad 可能已经执行，以 onLoad 为准，没有则用 URL
    if (Object.keys(params.value).length === 0) {
      params.value = h5Params
    }
    // #endif
  })

  // 获取单个参数
  const getParam = (key, defaultValue = '') => {
    return params.value[key] ?? defaultValue
  }

  return {
    params,
    getParam,
  }
}
