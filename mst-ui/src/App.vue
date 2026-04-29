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
    min-height: 100vh;
    margin: 0 auto;
    overflow: hidden;
    position: relative;
    .back {
      width: 20rpx;
      height: 30rpx;
      position: absolute;
      top: 100rpx;
      left: 30rpx;
      z-index: 999;
      .bg {
        width: 100%;
        position: absolute;
        z-index: -1;
      }
    }
  }
</style>
