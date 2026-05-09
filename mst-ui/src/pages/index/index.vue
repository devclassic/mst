<template>
  <view class="page">
    <image src="/static/index-top.png" class="top-bg" />
    <view class="main">
      <view class="search">
        <image src="/static/index-search.png" class="bg" />
        <input
          type="number"
          placeholder="输入 手机号 运单号 查快递"
          placeholder-style="color:#999999"
          class="input" />
        <view class="btn"></view>
      </view>
      <view class="block">
        <image v-if="state.type === 1" src="/static/index-block-1.png" class="block-bg" />
        <image v-if="state.type === 2" src="/static/index-block-2.png" class="block-bg" />
        <view v-if="state.type === 1" @click="changeType(2)" class="btn1"></view>
        <view v-if="state.type === 2" @click="changeType(1)" class="btn2"></view>
        <view @click="uni.navigateTo({ url: '/pages/addr/list' })" class="btn3"></view>
        <view @click="uni.navigateTo({ url: '/pages/express/index' })" class="btn4"></view>
        <view class="info1">
          <view class="name">路人甲</view>
          <view class="text">补充寄件人信息</view>
        </view>
        <view class="info4">请填写收货人信息</view>
      </view>
      <view class="pics">
        <view @click="uni.navigateTo({ url: '/pages/express/index' })" class="row">
          <view class="item">
            <image src="/static/index-pic-1.png" class="pic" />
            <view class="text">寄快递</view>
          </view>
          <view @click="uni.navigateTo({ url: '/pages/express/index' })" class="item">
            <image src="/static/index-pic-2.png" class="pic" />
            <view class="text">寄大件</view>
          </view>
          <view class="item">
            <image src="/static/index-pic-3.png" class="pic" />
            <view class="text">货拉拉</view>
          </view>
          <view class="item">
            <image src="/static/index-pic-4.png" class="pic" />
            <view class="text">跑腿</view>
          </view>
        </view>
        <view class="row">
          <view class="item">
            <image src="/static/index-pic-5.png" class="pic" />
            <view class="text">补差价</view>
          </view>
          <view class="item">
            <image src="/static/index-pic-6.png" class="pic" />
            <view class="text">客服</view>
          </view>
        </view>
      </view>
      <view class="ad">
        <image src="/static/index-ad.png" class="bg" />
        <view class="btn1"></view>
        <view class="btn2"></view>
      </view>
      <view class="info">
        <view class="row1">
          <view class="left">
            <image src="/static/index-exp-logo.png" class="logo" />
            <view class="name">中通快递</view>
            <view class="num">123456789012345</view>
            <image src="/static/index-icon-plus.png" class="plus" />
          </view>
          <view class="right">运输中</view>
        </view>
        <view class="row2">
          <view class="left">
            <view class="addr">内蒙古包头市</view>
            <view class="name">李女士</view>
          </view>
          <view class="center">
            <image src="/static/index-icon-car.png" class="car" />
          </view>
          <view class="right">
            <view class="addr">广东省深圳市</view>
            <view class="name">大货二仓</view>
          </view>
        </view>
        <view class="row3">
          <view class="box">
            <image src="/static/index-icon-circle.png" class="circle" />
            <view class="mask"></view>
            <view>运输中 2026-04-15 13:05:49</view>
            <view>【包头市】快件已到达满都拉分部</view>
          </view>
        </view>
        <view class="row4">
          <view class="btns">
            <view class="btn">取消订单</view>
            <view class="btn">订单详情</view>
          </view>
        </view>
      </view>
    </view>
    <image src="/static/index-bottom.png" class="bottom-bg" />
    <Tabbar />
  </view>
</template>

<script setup>
  import { reactive } from 'vue'
  import Tabbar from '../../components/tabbar/Tabbar.vue'

  const state = reactive({
    type: 1, // 1寄快递 2寄大件
  })

  const changeType = type => {
    state.type = type
  }
</script>

<style scoped lang="scss">
  .page {
    padding-bottom: 90rpx;
    .top-bg {
      width: 100%;
      height: 500rpx;
      position: absolute;
      z-index: 0;
    }
    .main {
      width: 700rpx;
      margin: 0 auto;
      position: relative;
      margin-top: 400rpx;
      .search {
        height: 102rpx;
        position: relative;
        .bg {
          width: 100%;
          height: 102rpx;
          position: absolute;
          z-index: 0;
        }
        .input {
          width: 480rpx;
          height: 80rpx;
          font-size: 24rpx;
          position: absolute;
          right: 90rpx;
          bottom: 0;
        }
        .btn {
          width: 90rpx;
          height: 80rpx;
          position: absolute;
          right: 0;
          bottom: 0;
        }
      }
      .block {
        height: 361rpx;
        margin-top: 15rpx;
        position: relative;
        .block-bg {
          width: 100%;
          height: 361rpx;
          position: absolute;
          z-index: 0;
        }
        .btn1 {
          width: 350rpx;
          height: 80rpx;
          position: absolute;
          top: 0;
          right: 0;
        }
        .btn2 {
          width: 350rpx;
          height: 80rpx;
          position: absolute;
          top: 0;
          left: 0;
        }
        .btn3 {
          width: 150rpx;
          height: 55rpx;
          position: absolute;
          top: 128rpx;
          right: 30rpx;
        }
        .btn4 {
          width: 150rpx;
          height: 55rpx;
          position: absolute;
          top: 263rpx;
          right: 30rpx;
        }
        .info1 {
          color: #000000;
          line-height: 1;
          position: absolute;
          top: 135rpx;
          left: 125rpx;
          .name {
            font-size: 30rpx;
          }
          .text {
            font-size: 26rpx;
            margin-top: 15rpx;
          }
        }
        .info4 {
          color: #999999;
          font-size: 30rpx;
          position: absolute;
          top: 270rpx;
          left: 125rpx;
        }
      }
      .pics {
        margin-top: 70rpx;
        padding: 0 45rpx;
        .row {
          width: fit-content;
          display: flex;
          margin-bottom: 25rpx;
          &:last-child {
            margin-bottom: 0;
          }
          .item {
            margin-right: 90rpx;
            &:last-child {
              margin-right: 0;
            }
            .pic {
              width: 85rpx;
              height: 85rpx;
            }
            .text {
              color: #4a4a4a;
              font-size: 24rpx;
              text-align: center;
            }
          }
        }
      }
      .ad {
        margin-top: 70rpx;
        height: 150rpx;
        position: relative;
        .bg {
          width: 100%;
          height: 150rpx;
          position: absolute;
          z-index: 0;
        }
        .btn1 {
          width: 365rpx;
          height: 100%;
          position: absolute;
          top: 0;
          left: 0;
        }
        .btn2 {
          width: 300rpx;
          height: 100%;
          position: absolute;
          top: 0;
          right: 0;
        }
      }
      .info {
        margin-top: 30rpx;
        padding: 20rpx 30rpx 15rpx;
        border-radius: 30rpx;
        background: #ffffff;
        position: relative;
        .row1 {
          display: flex;
          justify-content: space-between;
          align-items: center;
          .left {
            color: 000000;
            display: flex;
            justify-content: space-between;
            align-items: center;
            .logo {
              width: 62rpx;
              height: 62rpx;
              border-radius: 50%;
            }
            .name {
              font-size: 30rpx;
              margin-left: 20rpx;
            }
            .num {
              font-size: 26rpx;
              margin-left: 25rpx;
            }
            .plus {
              width: 30rpx;
              height: 30rpx;
              margin-left: 5rpx;
            }
          }
          .right {
            color: #89a700;
            font-size: 30rpx;
          }
        }
        .row2 {
          margin-top: 30rpx;
          color: #000000;
          display: flex;
          justify-content: space-between;
          align-items: center;
          .addr {
            font-size: 30rpx;
          }
          .name {
            margin-top: 15rpx;
            font-size: 26rpx;
          }
          .car {
            width: 40rpx;
            height: 23rpx;
          }
          .right {
            text-align: right;
          }
          .left,
          .right {
            line-height: 1;
          }
        }
        .row3 {
          margin-top: 25rpx;
          padding: 35rpx;
          background: #fefbf6;
          border-radius: 30rpx;
          .box {
            color: #000000;
            font-size: 26rpx;
            line-height: 1.5;
            padding: 0 35rpx;
            border-left: 2px solid #ffcc91;
            position: relative;
            .circle {
              width: 25rpx;
              height: 25rpx;
              border-radius: 50%;
              position: absolute;
              top: 8rpx;
              left: -14rpx;
            }
            .mask {
              width: 10rpx;
              height: 8rpx;
              background: #fefbf6;
              position: absolute;
              top: 0;
              left: -5rpx;
            }
          }
        }
        .row4 {
          margin-top: 15rpx;
          display: flex;
          justify-content: flex-end;
          align-items: center;
          .btns {
            width: fit-content;
            display: flex;
            .btn {
              width: 160rpx;
              height: 55rpx;
              border: 1px solid #ffaf54;
              color: #ff8800;
              margin-left: 15rpx;
              border-radius: 30rpx;
              display: flex;
              justify-content: center;
              align-items: center;
              font-size: 24rpx;
            }
          }
        }
      }
    }
    .bottom-bg {
      width: 100%;
      height: 70rpx;
    }
  }
</style>
