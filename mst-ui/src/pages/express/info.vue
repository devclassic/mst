<template>
  <view class="page">
    <image @click="uni.navigateBack()" src="/static/back.png" class="back" />
    <image src="/static/top.png" class="top-bg" />
    <view class="main">
      <view class="block1">
        <view class="left">物品类型</view>
        <view class="right">
          了解禁忌物品
          <image src="/static/express-info-arrow.png" class="arrow" />
        </view>
      </view>
      <view class="block2">
        <view class="search">
          <image src="/static/express-info-search.png" class="bg" />
          <input
            type="text"
            placeholder="请输入物品名称（限10个字）"
            placeholder-style="color:#cccccc"
            class="input" />
        </view>
        <view class="types">
          <view class="title">热门类型</view>
          <view class="row">
            <view class="item">服饰</view>
            <view class="item">食品</view>
            <view class="item">衣服</view>
            <view class="item">文件</view>
          </view>
          <view class="row">
            <view class="item">化妆品</view>
            <view class="item">饰品</view>
            <view class="item">鞋子</view>
            <view class="item">眼睛</view>
          </view>
          <view class="row">
            <view class="item">药品</view>
            <view class="item">毛绒</view>
            <view class="item">书包</view>
            <view class="item">牛羊肉</view>
          </view>
        </view>
      </view>
      <view class="block3">
        <view class="row1">
          <view class="left">预估重量</view>
          <view class="right">
            <view class="input">
              <image src="/static/express-info-num.png" class="bg" />
              <view @click="state.kg <= 1 ? 1 : state.kg--" class="btn1"></view>
              <view @click="state.kg++" class="btn2"></view>
              <input v-model="state.kg" type="number" class="num" />
            </view>
            <view class="kg">kg</view>
          </view>
        </view>
        <view class="row2">
          <view class="left">
            物品体积
            <text class="text">选填</text>
          </view>
          <view class="center">补充体积预估费用更准确</view>
          <view class="right">
            <u-switch v-model="state.checked"></u-switch>
          </view>
        </view>
        <view class="row3">
          <input type="number" placeholder="长" placeholder-style="color:#333333" class="input" />
          <text class="cm">cm</text>
          <text class="x">*</text>
          <input type="number" placeholder="宽" placeholder-style="color:#333333" class="input" />
          <text class="cm">cm</text>
          <text class="x">*</text>
          <input type="number" placeholder="高" placeholder-style="color:#333333" class="input" />
          <text class="cm">cm</text>
        </view>
      </view>
      <view class="block4">
        <view class="title">保价服务</view>
        <view class="item">
          <view>物品价值1000元及以下</view>
          <view>
            1元
            <u-checkbox shape="circle" size="40rpx" />
          </view>
        </view>
        <view class="item">
          <view>物品价值1000元及以下</view>
          <view>
            1元
            <u-checkbox shape="circle" size="40rpx" />
          </view>
        </view>
        <view class="item">
          <view>物品价值1000元及以下</view>
          <view>
            1元
            <u-checkbox shape="circle" size="40rpx" />
          </view>
        </view>
      </view>
      <view class="block5">
        <view class="title">备注</view>
        <view class="texts">
          <view class="text">带包装袋</view>
          <view class="text">带胶带</view>
        </view>
        <textarea class="input"></textarea>
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

<script setup>
  import { reactive } from 'vue'

  const state = reactive({
    kg: 1,
    checked: false,
  })
</script>

<style scoped lang="scss">
  .page {
    padding-bottom: 148rpx;
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
      margin: 190rpx auto 0;
      position: relative;
      .block1 {
        padding: 0 15rpx;
        display: flex;
        justify-content: space-between;
        align-items: center;
        .arrow {
          width: 17rpx;
          height: 29rpx;
          margin-left: 35rpx;
        }
      }
      .block2 {
        padding: 30rpx;
        background: #ffffff;
        border-radius: 30rpx;
        margin-top: 20rpx;
        .search {
          height: 60rpx;
          position: relative;
          .bg {
            width: 100%;
            height: 60rpx;
            position: absolute;
            z-index: 0;
          }
          .input {
            width: 560rpx;
            height: 60rpx;
            font-size: 26rpx;
            position: absolute;
            top: 0;
            left: 60rpx;
          }
        }
        .types {
          margin-top: 55rpx;
          .title {
            font-size: 26rpx;
            color: #888888;
            margin-bottom: 20rpx;
          }
          .row {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 15rpx;
            &:last-child {
              margin-bottom: 0;
            }
            .item {
              width: 150rpx;
              height: 50rpx;
              background: #f4f6f8;
              border-radius: 20rpx;
              font-size: 26rpx;
              color: #333333;
              display: flex;
              justify-content: center;
              align-items: center;
            }
          }
        }
      }
      .block3 {
        margin-top: 25rpx;
        padding: 25rpx;
        background: #ffffff;
        border-radius: 30rpx;
        .row1 {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding-bottom: 25rpx;
          border-bottom: 1px solid #e8e8e8;
          .left {
            font-size: 30rpx;
          }
          .right {
            display: flex;
            justify-content: flex-end;
            align-items: center;
            .input {
              width: 150rpx;
              height: 50rpx;
              position: relative;
              .bg {
                width: 150rpx;
                height: 50rpx;
                position: absolute;
                z-index: 0;
              }
              .btn1 {
                width: 50rpx;
                height: 50rpx;
                position: absolute;
                top: 0;
                left: 0;
              }
              .btn2 {
                width: 50rpx;
                height: 50rpx;
                position: absolute;
                top: 0;
                right: 0;
              }
              .num {
                width: 50rpx;
                height: 50rpx;
                text-align: center;
                position: absolute;
                top: 0;
                left: 50rpx;
              }
            }
            .kg {
              margin-left: 20rpx;
            }
          }
        }
        .row2 {
          margin-top: 30rpx;
          display: flex;
          justify-content: space-between;
          align-items: center;
          .left {
            font-size: 30rpx;
            .text {
              font-size: 26rpx;
              color: #cccccc;
              margin-left: 10rpx;
            }
          }
          .center {
            font-size: 26rpx;
            color: #cccccc;
          }
        }
        .row3 {
          margin-top: 25rpx;
          display: flex;
          justify-content: space-between;
          align-items: center;
          .input {
            width: 130rpx;
            height: 50rpx;
            background: #f4f6f8;
            border-radius: 30rpx;
            text-align: center;
          }
        }
      }
      .block4 {
        line-height: 1;
        margin-top: 20rpx;
        padding: 40rpx 30rpx 30rpx;
        background: #ffffff;
        border-radius: 30rpx;
        .title {
          font-size: 30rpx;
          margin-bottom: 30rpx;
        }
        .item {
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-size: 26rpx;
          margin-bottom: 20rpx;
          &:last-child {
            margin-bottom: 0;
          }
          :deep(.u-checkbox) {
            margin-left: 10rpx;
          }
          :deep(.u-checkbox__label) {
            margin: 0;
          }
        }
      }
      .block5 {
        margin-top: 20rpx;
        padding: 40rpx 10rpx 30rpx;
        background: #ffffff;
        border-radius: 30rpx;
        .title {
          font-size: 30rpx;
          margin-bottom: 30rpx;
          padding-left: 20rpx;
        }
        .texts {
          display: flex;
          align-items: center;
          padding-left: 20rpx;
          .text {
            width: 150rpx;
            height: 50rpx;
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 26rpx;
            color: #333333;
            background: #f4f6f8;
            border-radius: 30rpx;
            margin-right: 10rpx;
            &:last-child {
              margin-right: 0;
            }
          }
        }
        .input {
          width: 100%;
          height: 250rpx;
          padding: 30rpx;
          background: #f4f6f8;
          margin-top: 10rpx;
          font-size: 26rpx;
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
