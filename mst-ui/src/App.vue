<script>
  export default {
    onLaunch: function () {
      console.log('App Launch')
    },
    onShow: function () {
      console.log('App Show')
    },
    onHide: function () {
      console.log('App Hide')
    },
  }
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
