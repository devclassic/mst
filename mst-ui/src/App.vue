<script setup>
  import { onLaunch, onShow, onHide } from '@dcloudio/uni-app'

  onLaunch(() => {})

  onShow(() => {
    uni.hideTabBar({ fail: () => {} })
  })

  onHide(() => {})
</script>

<style lang="scss">
  @import 'uview-pro/index.scss';

  /* #ifdef H5 */
  .uni-tabbar {
    display: none;
  }

  .uni-app--showtabbar uni-page-wrapper::after {
    height: 0;
  }
  /* #endif */

  .page {
    width: 750rpx;
    min-height: 100vh;
    margin: 0 auto;
    background-color: #fefbf6;
    overflow: hidden;
    position: relative;
  }

  .main {
    width: 700rpx;
    margin: 0 auto;
    position: relative;
  }
</style>
