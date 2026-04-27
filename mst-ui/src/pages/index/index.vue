<template>
  <view class="page">
    <image src="/static/images/index-top-bg.png" mode="widthFix" class="top-bg" />
    <view class="box">
      <view class="search">
        <image src="/static/images/index-search.png" mode="widthFix" class="search-bg" />
        <input type="text" placeholder="输入手机号 运单号 查快递" class="input" />
        <view class="button"></view>
      </view>
      <view class="block" :class="'block' + state.block">
        <image
          v-if="state.block === 1"
          src="/static/images/index-block-1.png"
          mode="widthFix"
          class="block-bg" />
        <image
          v-if="state.block === 2"
          src="/static/images/index-block-2.png"
          mode="widthFix"
          class="block-bg" />
        <view class="switch">
          <view v-show="state.block === 2" @click="blockSwitch(1)" class="btn btn1"></view>
          <view v-show="state.block === 1" @click="blockSwitch(2)" class="btn btn2"></view>
        </view>
        <view class="link address"></view>
        <view class="link send"></view>
        <view class="text1">
          <view class="line1">鲁仁贾</view>
          <view class="line2">补充寄件人信息</view>
        </view>
        <view class="text2">请填写收货人信息</view>
      </view>
      <view class="business">
        <view class="line">
          <view class="item">
            <view>
              <image src="/static/images/business1.png" mode="widthFix" class="pic" />
              <view class="text">寄快递</view>
            </view>
          </view>
          <view class="item">
            <view>
              <image src="/static/images/business2.png" mode="widthFix" class="pic" />
              <view class="text">寄大件</view>
            </view>
          </view>
          <view class="item">
            <view>
              <image src="/static/images/business3.png" mode="widthFix" class="pic" />
              <view class="text">货拉拉</view>
            </view>
          </view>
          <view class="item">
            <view>
              <image src="/static/images/business4.png" mode="widthFix" class="pic" />
              <view class="text">跑腿</view>
            </view>
          </view>
        </view>
        <view class="line">
          <view class="item">
            <view>
              <image src="/static/images/business5.png" mode="widthFix" class="pic" />
              <view class="text">补差价</view>
            </view>
          </view>
          <view class="item">
            <view>
              <image src="/static/images/business6.png" mode="widthFix" class="pic" />
              <view class="text">客服</view>
            </view>
          </view>
        </view>
      </view>
      <view class="entrance">
        <image src="/static/images/index-entrance.png" mode="widthFix" class="entrance-bg" />
        <view class="entrance1"></view>
        <view class="entrance2"></view>
      </view>
      <view class="status">
        <view class="row1">
          <view class="left">
            <image src="/static/images/icon-zt.png" class="logo" />
            <view class="name">中通快递</view>
            <view class="number">123456789123456</view>
            <image src="/static/images/icon-plus.png" mode="widthFix" class="icon" />
          </view>
          <view class="right">运输中</view>
        </view>
        <view class="row2">
          <view class="left">
            <view class="addr">内蒙古包头市</view>
            <view class="name">李女士</view>
          </view>
          <view class="center">
            <image src="/static/images/icon-truck.png" mode="widthFix" class="icon" />
          </view>
          <view class="right">
            <view class="addr">内蒙古包头市</view>
            <view class="name">李女士</view>
          </view>
        </view>
        <view class="row3">
          <view class="text">
            <image src="/static/images/icon-dot.png" mode="widthFix" class="dot" />
            <view>运输中 2026-04-15 13:05:49</view>
            <view>【包头市】快件已到达满都拉分部</view>
          </view>
        </view>
        <view class="row4">
          <view class="btn">取消订单</view>
          <view class="btn">订单详情</view>
        </view>
      </view>
    </view>
    <image src="/static/images/index-bottom-bg.png" mode="widthFix" class="bottom-bg" />
  </view>
  <Tabbar />
</template>

<script setup>
  import { reactive } from 'vue'
  import Tabbar from '../../components/tabbar/Tabbar.vue'

  const state = reactive({
    block: 1, // 1寄快递 2寄大件
  })

  const blockSwitch = i => {
    state.block = i
  }
</script>

<style scoped lang="scss">
  .page {
    background: #fefbf6;
    padding-bottom: 90rpx;
    position: relative;
    .top-bg {
      width: 100%;
      z-index: 0;
      position: absolute;
    }
  }

  .box {
    width: 700rpx;
    margin: 400rpx auto 0;
  }

  .search {
    height: 100rpx;
    position: relative;
    .search-bg {
      width: 100%;
      z-index: 0;
      position: absolute;
    }
    .input {
      width: 475rpx;
      height: 76rpx;
      line-height: 106rpx;
      font-size: 24rpx;
      position: absolute;
      top: 20rpx;
      left: 130rpx;
    }
    .button {
      width: 90rpx;
      height: 80rpx;
      position: absolute;
      top: 20rpx;
      right: 0;
    }
  }

  .block {
    height: 360rpx;
    margin-top: 15rpx;
    position: relative;
    .block-bg {
      width: 100%;
      z-index: 0;
      position: absolute;
    }
    .switch {
      width: 100%;
      height: 75rpx;
      position: absolute;
      top: 5rpx;
      .btn {
        width: 340rpx;
        height: 75rpx;
        position: absolute;
      }
      .btn1 {
        left: 0;
      }
      .btn2 {
        right: 0;
      }
    }
    .link {
      width: 148rpx;
      height: 55rpx;
      position: absolute;
      right: 30rpx;
      &.address {
        top: 128rpx;
      }
      &.send {
        bottom: 42rpx;
      }
    }
    .text1 {
      color: #000000;
      line-height: 1;
      position: absolute;
      top: 140rpx;
      left: 125rpx;
      .line1 {
        font-size: 30rpx;
      }
      .line2 {
        font-size: 26rpx;
        margin-top: 10rpx;
      }
    }
    .text2 {
      color: #999999;
      font-size: 28rpx;
      line-height: 1;
      position: absolute;
      left: 125rpx;
      bottom: 52rpx;
    }
  }

  .business {
    margin-top: 70rpx;
    .line {
      display: flex;
      margin-top: 25rpx;
      .item {
        width: 175rpx;
        display: flex;
        justify-content: center;
        .pic {
          width: 85rpx;
          height: 80rpx;
        }
        .text {
          text-align: center;
        }
      }
    }
  }

  .entrance {
    height: 140rpx;
    margin-top: 50rpx;
    position: relative;
    .entrance-bg {
      width: 100%;
      z-index: 0;
      position: absolute;
    }
    .entrance1 {
      width: 365rpx;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
    }
    .entrance2 {
      width: 305rpx;
      height: 100%;
      position: absolute;
      top: 0;
      right: 0;
    }
  }

  .status {
    margin-top: 30rpx;
    padding: 20rpx 30rpx;
    background: #ffffff;
    border-radius: 20rpx;
    .row1 {
      display: flex;
      justify-content: space-between;
      align-items: center;
      .left {
        display: flex;
        align-items: center;
        .logo,
        .name,
        .number {
          margin-right: 15rpx;
        }
        .logo {
          width: 62rpx;
          height: 62rpx;
          border-radius: 50%;
        }
        .name {
          font-size: 28rpx;
        }
        .number {
          font-size: 20rpx;
        }
        .icon {
          width: 30rpx;
          height: 30rpx;
        }
      }
      .right {
        color: #89a700;
        font-size: 28rpx;
      }
    }
    .row2 {
      line-height: 1;
      margin-top: 30rpx;
      display: flex;
      justify-content: space-between;
      .addr {
        font-size: 28rpx;
      }
      .name {
        font-size: 26rpx;
        margin-top: 15rpx;
      }
      .icon {
        width: 40rpx;
        height: 23rpx;
      }
      .right {
        text-align: right;
      }
    }
    .row3 {
      line-height: 1.5;
      margin-top: 25rpx;
      padding: 30rpx 0;
      background: #fefbf6;
      border-radius: 20rpx;
      display: flex;
      justify-content: center;
      .text {
        width: 560rpx;
        padding: 0 35rpx;
        font-size: 24rpx;
        border-left: 2px solid #ffcc91;
        position: relative;
        .dot {
          width: 25rpx;
          height: 25rpx;
          position: absolute;
          top: 0;
          left: -15rpx;
        }
      }
    }
    .row4 {
      margin-top: 20rpx;
      display: flex;
      justify-content: flex-end;
      .btn {
        width: 160rpx;
        height: 56rpx;
        border: 1px solid #ffaf54;
        border-radius: 30rpx;
        margin-left: 14rpx;
        color: #ff8800;
        font-size: 24rpx;
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }
  }

  .bottom-bg {
    width: 100%;
    height: 70rpx;
  }
</style>
