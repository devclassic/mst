<template>
  <view class="tabbar">
    <view v-for="(item, index) in state.items" :key="index" @click="click(index)" class="item">
      <image :src="index === tabbar.current ? item.picA : item.pic" class="pic" />
      <view class="text" :class="{ active: index === tabbar.current }">{{ item.text }}</view>
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
        pic: '/static/tabbar-pic1.png',
        picA: '/static/tabbar-pic1a.png',
        text: '首页',
        url: '/pages/index/index',
      },
      {
        pic: '/static/tabbar-pic2.png',
        picA: '/static/tabbar-pic2a.png',
        text: '运单查询',
        url: '/pages/order/order',
      },
      {
        pic: '/static/tabbar-pic3.png',
        picA: '/static/tabbar-pic3a.png',
        text: '我的',
        url: '/pages/my/my',
      },
    ],
  })

  const click = i => {
    uni.switchTab({ url: state.items[i].url })
    tabbar.setCurrent(i)
  }
</script>

<style scoped lang="scss">
  .tabbar {
    width: 750rpx;
    height: 90rpx;
    position: fixed;
    left: 50%;
    bottom: 0;
    border-top: 1px solid #fefbf6;
    transform: translateX(-50%);
    z-index: 1000;
    display: flex;
    justify-content: space-around;
    align-items: center;
    background: #ffffff;
    .item {
      width: fit-content;
      text-align: center;
      .pic {
        width: 40rpx;
        height: 40rpx;
        margin: 0 auto;
      }
      .text {
        color: #666666;
        font-size: 20rpx;
        &.active {
          color: #ff8800;
        }
      }
    }
  }
</style>
