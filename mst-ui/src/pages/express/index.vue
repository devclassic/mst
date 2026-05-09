<template>
  <view class="page">
    <image @click="uni.navigateBack()" src="/static/back.png" class="back" />
    <image src="/static/top.png" class="top-bg" />
    <view class="main">
      <view class="addr">
        <image src="/static/express-index-sending-receiving.png" class="pic" />
        <view class="addrs">
          <view class="block">
            <view class="row1">
              <view class="left">
                <view class="name">路人甲</view>
                <view class="num">13847253707</view>
              </view>
              <view class="btn">地址薄</view>
            </view>
            <view class="row2">补充寄件人地址信息</view>
          </view>
          <view class="block">
            <view class="row1">
              <view class="left">
                <view class="name">路人甲</view>
                <view class="num">13847253707</view>
              </view>
              <view class="btn">地址薄</view>
            </view>
            <view class="row2">补充寄件人信息参考文字字数及间距，两行样式</view>
          </view>
        </view>
      </view>
      <view class="info">
        <view class="item">
          <view>物品信息</view>
          <view class="right">
            <view class="text">1kg 文件</view>
            <image src="/static/express-index-arrow.png" class="arrow" />
          </view>
        </view>
        <view class="item">
          <view>快递公司选择</view>
          <view class="right">
            <view class="text">极兔快递</view>
            <image src="/static/express-index-arrow.png" class="arrow" />
          </view>
        </view>
        <view class="item">
          <view>期望上门时间</view>
          <view class="right">
            <view class="text">预计今天 17:00前</view>
            <image src="/static/express-index-arrow.png" class="arrow" />
          </view>
        </view>
      </view>
      <image src="/static/express-index-ad.png" class="ad" />
    </view>
    <view class="botbar">
      <view class="left">
        <view class="row1">
          <u-checkbox v-model="state.check" shape="circle" size="40rpx" />
          <text>我已阅读并同意</text>
          <text class="blue">《协议内容协议内容》</text>
        </view>
        <view class="row2">
          <text>预估</text>
          <text class="red">￥</text>
          <text class="price">106.00</text>
          <view class="more">
            <text>明细</text>
            <image src="/static/express-index-up.png" class="up" />
          </view>
        </view>
      </view>
      <view class="btn">
        <image src="/static/express-index-btn.png" class="bg" />
        <view class="text">立即下单</view>
      </view>
    </view>
  </view>
</template>

<script setup>
  import { reactive } from 'vue'

  const state = reactive({
    check: false,
  })
</script>

<style scoped lang="scss">
  .page {
    .back {
      width: 18rpx;
      height: 31rpx;
      position: absolute;
      top: 100rpx;
      left: 50rpx;
      z-index: 1000;
    }
    .top-bg {
      width: 100%;
      height: 500rpx;
      position: absolute;
      z-index: 0;
    }
    .main {
      width: 700rpx;
      margin: 185rpx auto 0;
      position: relative;
      .addr {
        padding: 30rpx;
        background: #ffffff;
        border-radius: 30rpx;
        display: flex;
        justify-content: space-between;
        .pic {
          width: 62rpx;
          height: 197rpx;
          margin-right: 30rpx;
        }
        .addrs {
          flex: 1;
          .block {
            color: #000000;
            line-height: 1;
            &:first-child {
              padding-bottom: 10rpx;
              border-bottom: 1px solid #e8e8e8;
            }
            &:last-child {
              padding-top: 30rpx;
            }
            .btn {
              width: 160rpx;
              height: 55rpx;
              border: 1px solid #ffaf54;
              color: #ff8800;
              font-size: 24rpx;
              display: flex;
              justify-content: center;
              align-items: center;
              border-radius: 30rpx;
            }
            .row1 {
              display: flex;
              justify-content: space-between;
              align-items: center;
              .left {
                display: flex;
                .name {
                  font-size: 30rpx;
                }
                .num {
                  font-size: 26rpx;
                  margin-left: 30rpx;
                }
              }
            }
            .row2 {
              width: 370rpx;
              font-size: 26rpx;
              line-height: 1.3;
            }
          }
        }
      }
      .info {
        margin-top: 20rpx;
        padding: 0 25rpx;
        background: #ffffff;
        border-radius: 30rpx;
        .item {
          height: 100rpx;
          border-bottom: 1px solid #e8e8e8;
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-size: 30rpx;
          padding: 0 10rpx;
          &:last-child {
            border-bottom: 0;
          }
          .right {
            display: flex;
            justify-content: flex-end;
            align-items: center;
            .text {
              display: flex;
              justify-content: flex-end;
            }
            .arrow {
              width: 17rpx;
              height: 29rpx;
              margin-left: 30rpx;
            }
          }
        }
      }
      .ad {
        width: 100%;
        height: 130rpx;
        margin-top: 60rpx;
      }
    }
    .botbar {
      width: 750rpx;
      height: 120rpx;
      background: #ffffff;
      padding: 15rpx 30rpx;
      position: fixed;
      left: 50%;
      bottom: 0;
      transform: translateX(-50%);
      display: flex;
      justify-content: space-between;
      align-items: center;
      .left {
        line-height: 1;
        .row1 {
          font-size: 24rpx;
          color: #999999;
          .blue {
            color: #4586ff;
          }
          :deep(.u-checkbox__label) {
            margin: 0;
            margin-right: 10rpx;
          }
        }
        .row2 {
          color: #888888;
          font-size: 26rpx;
          margin-top: 5rpx;
          display: flex;
          align-items: baseline;
          .red {
            color: #f2250f;
          }
          .price {
            color: #f2250f;
            font-size: 42rpx;
          }
          .more {
            margin-left: 20rpx;
            .up {
              width: 14rpx;
              height: 9rpx;
              margin-left: 10rpx;
            }
          }
        }
      }
      .btn {
        width: 200rpx;
        height: 88rpx;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 30rpx;
        color: #ffffff;
        position: relative;
        .bg {
          width: 200rpx;
          height: 88rpx;
          position: absolute;
          z-index: 0;
        }
        .text {
          position: relative;
        }
      }
    }
  }
</style>
