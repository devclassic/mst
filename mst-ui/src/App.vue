<script setup>
  import { onLaunch, onShow } from '@dcloudio/uni-app'

  const hideTabBar = () => {
    uni.hideTabBar({ fail: () => {} })
    // #ifdef H5
    const tabbar = document.querySelector('.uni-tabbar')
    if (tabbar) {
      tabbar.style.display = 'none'
    }
    // #endif
  }
  onLaunch(() => {
    hideTabBar()
    setTimeout(hideTabBar, 300)
  })

  onShow(() => {
    hideTabBar()
    setTimeout(hideTabBar, 300)
  })
</script>

<style lang="scss">
  @import 'uview-pro/index.scss';

  .page {
    width: 750rpx;
    min-height: 100dvh;
    margin: 0 auto;
    overflow: hidden;
    position: relative;
  }
</style>
