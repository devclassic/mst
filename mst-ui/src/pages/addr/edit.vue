<template>
  <view class="page">
    <image @click="uni.navigateBack()" src="/static/back.png" class="back" />
    <image src="/static/top.png" class="top-bg" />
    <view class="main">
      <view class="pick">
        <textarea
          placeholder="粘贴或输入内容，自动识别姓名、电话和地址"
          placeholder-style="color:#cccccc"
          class="input"></textarea>
        <view class="btns">
          <view class="btn">粘贴并识别</view>
        </view>
      </view>
      <view class="form">
        <view class="item">
          <view class="left">
            <view class="label">姓名</view>
            <input
              type="text"
              v-model="state.form.name"
              placeholder="请输入姓名"
              placeholder-style="color:#cccccc"
              class="input1" />
          </view>
          <view @click="uni.navigateBack()" class="btn">地址薄</view>
        </view>
        <view class="item">
          <view class="left">
            <view class="label">电话</view>
            <input
              type="text"
              v-model="state.form.tel"
              placeholder="请输入联系号码"
              placeholder-style="color:#cccccc"
              class="input2" />
          </view>
        </view>
        <view @click="state.showRegion = !state.showRegion" class="item">
          <view class="left">
            <view class="label">省市</view>
            <view class="region" :class="{ active: state.form.region !== '请选择省市区' }">
              {{ state.form.region }}
            </view>
          </view>
          <image src="/static/addr-edit-arrow.png" class="arrow" />
        </view>
        <view class="item">
          <view class="left">
            <view class="label">详细地址</view>
            <input
              type="text"
              v-model="state.form.addr"
              placeholder="请输入详细地址"
              placeholder-style="color:#cccccc"
              class="input2" />
          </view>
        </view>
        <view class="item">
          <view class="left">
            <u-checkbox
              v-model="state.form.default"
              shape="circle"
              size="40rpx"
              :label="`默认${type}地址`"
              label-size="26rpx" />
          </view>
          <view @click="clean" class="btn">清空</view>
        </view>
      </view>
    </view>
    <u-picker v-model="state.showRegion" mode="region" @confirm="regionConfirm"></u-picker>
    <view class="botbar">
      <view @click="uni.navigateBack()" class="btn">
        <image src="/static/addr-edit-botbar-btn.png" class="bg" />
        <view class="text">确定</view>
      </view>
    </view>
  </view>
</template>

<script setup>
  import { computed, reactive } from 'vue'
  import { usePageParams } from '../../hooks/usePageParams'

  const page = usePageParams()

  const state = reactive({
    showRegion: false,
    form: {
      name: '',
      tel: '',
      region: '请选择省市区',
      addr: '',
      default: false,
    },
  })

  const type = computed(() => {
    return page.params.value.type === 1 ? '寄件' : '收件'
  })

  const clean = () => {
    state.form.name = ''
    state.form.tel = ''
    state.form.region = '请选择省市区'
    state.form.addr = ''
  }

  const regionConfirm = e => {
    state.form.region = `${e.province.label} ${e.city.label} ${e.area.label}`
  }
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
      margin: 180rpx auto 0;
      position: relative;
      .btn {
        width: 180rpx;
        height: 55rpx;
        border: 1px solid #ffaf54;
        color: #ff8800;
        font-size: 24rpx;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 30rpx;
      }
      .pick {
        height: 245rpx;
        background: #ffffff;
        border-radius: 30rpx;
        padding: 40rpx 30rpx 15rpx;
        .input {
          width: 640rpx;
          height: 120rpx;
          font-size: 30rpx;
        }
        .btns {
          margin-top: 15rpx;
          display: flex;
          justify-content: flex-end;
        }
      }
      .form {
        margin-top: 15rpx;
        padding: 0 25rpx;
        background: #ffffff;
        border-radius: 30rpx;
        .item {
          height: 100rpx;
          border-bottom: 1px solid #e8e8e8;
          padding: 0 10rpx;
          color: #000000;
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-size: 30rpx;
          &:last-child {
            border-bottom: 0;
          }
          .left {
            display: flex;
            align-items: center;
          }
          .label {
            width: 160rpx;
          }
          .input1 {
            width: 270rpx;
          }
          .input2 {
            width: 465rpx;
          }
          .arrow {
            width: 16rpx;
            height: 29rpx;
          }
          .region {
            color: #cccccc;
            &.active {
              color: #000000;
            }
          }
          :deep(.u-checkbox__label) {
            font-size: 26rpx;
            color: #000000;
          }
        }
      }
    }
    .botbar {
      width: 750rpx;
      height: 128rpx;
      border-top: 1px solid #e8e8e8;
      position: fixed;
      left: 50%;
      bottom: 0;
      transform: translateX(-50%);
      background: #ffffff;
      display: flex;
      justify-content: space-around;
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
          font-size: 30rpx;
          color: #ffffff;
        }
      }
    }
  }
</style>
