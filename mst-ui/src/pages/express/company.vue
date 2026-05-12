<template>
  <view class="page">
    <image @click="uni.navigateBack()" src="/static/back.png" class="back" />
    <image src="/static/top.png" class="top-bg" />
    <view class="title">选择快递公司</view>
    <view class="tips">
      <view class="wrap">
        <image src="/static/express-company-wran.png" class="wran" />
        <view class="text">
          超重需回平台补缴费用，超限重按照官方原价计费。建议保留称重图片，便于复审。
        </view>
      </view>
    </view>
    <view class="list">
      <view class="item">
        <view class="row1">
          <view class="left">
            <image src="/static/express-company-logo.png" class="logo" />
            <view class="company">中通快递</view>
            <view class="info">价格优 售后一般</view>
          </view>
          <view class="right">原价 ￥12.00</view>
        </view>
        <view class="row2">
          <view class="left">蒙速通价格</view>
          <view class="right">￥7.35</view>
        </view>
        <view class="row3">
          <view class="left">限重 50.00 kg</view>
          <view class="right">
            续重
            <text class="price">3.30</text>
            元/kg
          </view>
        </view>
      </view>
      <view class="item">
        <view class="row1">
          <view class="left">
            <image src="/static/express-company-logo.png" class="logo" />
            <view class="company">中通快递</view>
            <view class="info">价格优 售后一般</view>
          </view>
          <view class="right">原价 ￥12.00</view>
        </view>
        <view class="row2">
          <view class="left">蒙速通价格</view>
          <view class="right">￥7.35</view>
        </view>
        <view class="row3">
          <view class="left">限重 50.00 kg</view>
          <view class="right">
            续重
            <text class="price">3.30</text>
            元/kg
          </view>
        </view>
      </view>
      <view class="item">
        <view class="row1">
          <view class="left">
            <image src="/static/express-company-logo.png" class="logo" />
            <view class="company">中通快递</view>
            <view class="info">价格优 售后一般</view>
          </view>
          <view class="right">原价 ￥12.00</view>
        </view>
        <view class="row2">
          <view class="left">蒙速通价格</view>
          <view class="right">￥7.35</view>
        </view>
        <view class="row3">
          <view class="left">限重 50.00 kg</view>
          <view class="right">
            续重
            <text class="price">3.30</text>
            元/kg
          </view>
        </view>
      </view>
      <view class="item">
        <view class="row1">
          <view class="left">
            <image src="/static/express-company-logo.png" class="logo" />
            <view class="company">中通快递</view>
            <view class="info">价格优 售后一般</view>
          </view>
          <view class="right">原价 ￥12.00</view>
        </view>
        <view class="row2">
          <view class="left">蒙速通价格</view>
          <view class="right">￥7.35</view>
        </view>
        <view class="row3">
          <view class="left">限重 50.00 kg</view>
          <view class="right">
            续重
            <text class="price">3.30</text>
            元/kg
          </view>
        </view>
      </view>
      <view class="item">
        <view class="row1">
          <view class="left">
            <image src="/static/express-company-logo.png" class="logo" />
            <view class="company">中通快递</view>
            <view class="info">价格优 售后一般</view>
          </view>
          <view class="right">原价 ￥12.00</view>
        </view>
        <view class="row2">
          <view class="left">蒙速通价格</view>
          <view class="right">￥7.35</view>
        </view>
        <view class="row3">
          <view class="left">限重 50.00 kg</view>
          <view class="right">
            续重
            <text class="price">3.30</text>
            元/kg
          </view>
        </view>
      </view>
      <view class="item">
        <view class="row1">
          <view class="left">
            <image src="/static/express-company-logo.png" class="logo" />
            <view class="company">中通快递</view>
            <view class="info">价格优 售后一般</view>
          </view>
          <view class="right">原价 ￥12.00</view>
        </view>
        <view class="row2">
          <view class="left">蒙速通价格</view>
          <view class="right">￥7.35</view>
        </view>
        <view class="row3">
          <view class="left">限重 50.00 kg</view>
          <view class="right">
            续重
            <text class="price">3.30</text>
            元/kg
          </view>
        </view>
      </view>
    </view>
    <view class="botbar">
      <view @click="uni.navigateBack()" class="btn">
        <image src="/static/express-index-protocol-btn.png" class="bg" />
        <view class="text">确定</view>
      </view>
    </view>
  </view>
</template>

<script setup></script>

<style scoped lang="scss">
  .page {
    padding-bottom: 128rpx;
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
    .title {
      width: 670rpx;
      margin: 190rpx auto 0;
      font-size: 30rpx;
      color: #000000;
      position: relative;
    }
    .tips {
      margin-top: 20rpx;
      background: #fff8f3;
      padding: 20rpx 30rpx;
      position: relative;
      .wrap {
        display: flex;
        .wran {
          width: 32rpx;
          height: 32rpx;
          margin: 5rpx 15rpx 0 0;
        }
        .text {
          flex: 1;
          font-size: 26rpx;
          color: #ff7919;
          line-height: 1.5;
        }
      }
    }
    .list {
      width: 700rpx;
      margin: 30rpx auto 0;
      position: relative;
      .item {
        line-height: 1;
        padding: 30rpx 25rpx;
        margin-bottom: 20rpx;
        color: #222222;
        background: #ffffff;
        border-radius: 30rpx;
        .row1 {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 0 5rpx 10rpx;
          border-bottom: 1px solid #e8e8e8;
          .left {
            display: flex;
            align-items: center;
            .logo {
              width: 62rpx;
              height: 62rpx;
              border-radius: 50%;
            }
            .company {
              font-size: 30rpx;
              margin-left: 20rpx;
            }
            .info {
              width: fit-content;
              font-size: 24rpx;
              color: #ffffff;
              padding: 8rpx 10rpx;
              background: #6ed7d8;
              border-radius: 10rpx;
              margin-left: 15rpx;
            }
          }
          .right {
            font-size: 26rpx;
          }
        }
        .row2 {
          padding: 0 15rpx;
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-top: 25rpx;
          .left {
            font-size: 30rpx;
          }
          .right {
            color: #f2250f;
            font-size: 32rpx;
          }
        }
        .row3 {
          padding: 0 15rpx;
          font-size: 24rpx;
          margin-top: 15rpx;
          display: flex;
          justify-content: space-between;
          align-items: center;
          .left {
            color: #888888;
          }
          .right {
            .price {
              color: #f2250f;
            }
          }
        }
      }
    }
    .botbar {
      width: 750rpx;
      height: 128rpx;
      border-top: 1px solid #e8e8e8;
      background: #ffffff;
      position: fixed;
      left: 50%;
      bottom: 0;
      transform: translateX(-50%);
      display: flex;
      justify-content: center;
      align-items: center;
      .btn {
        width: 690rpx;
        height: 88rpx;
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        .bg {
          width: 690rpx;
          height: 88rpx;
          position: absolute;
          z-index: 0;
        }
        .text {
          position: relative;
          color: #ffffff;
          font-size: 30rpx;
        }
      }
    }
  }
</style>
