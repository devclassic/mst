import { ref } from 'vue'

export const useQuery = () => {
  const pages = getCurrentPages()
  if (pages.length === 0) return {}

  const currentPage = pages[pages.length - 1]

  // #ifdef MP-WEIXIN
  return currentPage.options || {}
  // #endif

  // #ifdef H5
  return currentPage.$page?.options || currentPage.options || {}
  // #endif
}
