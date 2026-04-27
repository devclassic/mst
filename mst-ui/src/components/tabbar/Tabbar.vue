<template>
  <view class="tabbar">
    <view v-for="(item, index) in state.items" :key="index" class="item">
      <view @click="to(index)" class="btn">
        <view class="icon-box">
          <image
            :src="tabbar.current === index ? item.icona : item.icon"
            mode="widthFix"
            class="icon" />
        </view>
        <view class="text" :class="{ active: tabbar.current === index }">{{ item.text }}</view>
      </view>
    </view>
  </view>
</template>

<script setup>
  import { reactive } from 'vue'
  import { useTabbar } from '../../stores/useTabbar'

  const tabbar = useTabbar()

  const state = reactive({
    items: [
      {
        url: '/pages/index/index',
        icon: '/static/images/tabbar-1.png',
        icona: '/static/images/tabbar-1-a.png',
        text: '首页',
      },
      {
        url: '/pages/order/order',
        icon: '/static/images/tabbar-2.png',
        icona: '/static/images/tabbar-2-a.png',
        text: '运单速查',
      },
      {
        url: '/pages/my/my',
        icon: '/static/images/tabbar-3.png',
        icona: '/static/images/tabbar-3-a.png',
        text: '我的',
      },
    ],
  })

  const to = index => {
    if (tabbar.current === index) return
    tabbar.setCurrent(index)
    const url = state.items[index].url
    uni.switchTab({ url })
  }
</script>

<style scoped lang="scss">
  .tabbar {
    width: 750rpx;
    height: 90rpx;
    line-height: 1;
    border-top: 1px solid #fefbf6;
    background: #ffffff;
    display: flex;
    justify-content: space-between;
    position: fixed;
    left: 50%;
    bottom: 0;
    transform: translateX(-50%);
    .item {
      width: calc(100% / 3);
      display: flex;
      justify-content: center;
      align-items: center;
      .btn {
        .icon-box {
          display: flex;
          justify-content: center;
          align-items: center;
          .icon {
            width: 50rpx;
            height: 50rpx;
            margin: 0 auto;
          }
        }
        .text {
          text-align: center;
          font-size: 20rpx;
          &.active {
            color: #ff8800;
          }
        }
      }
    }
  }
</style>
