<template>
  <view class="page">
    <image src="/static/images/address-top-bg.png" mode="widthFix" class="top-bg" />
    <view class="form">
      <view class="row">
        <view class="label">姓名</view>
        <input v-model="state.form.name" type="text" placeholder="请输入姓名" class="input name" />
        <view @click="toAddress" class="btn">地址薄</view>
      </view>
      <view class="row">
        <view class="label">电话</view>
        <input v-model="state.form.phone" type="text" placeholder="请输入联系号码" class="input" />
      </view>
      <view @click="showRegion" class="row">
        <view class="label">省市</view>
        <view class="value">{{ regionText }}</view>
        <image src="/static/images/arrow-right.png" mode="widthFix" class="arrow" />
      </view>
      <view class="row">
        <view class="label">详细地址</view>
        <input
          v-model="state.form.address"
          type="text"
          placeholder="请输入详细地址"
          class="input" />
      </view>
      <view class="row">
        <view class="wrap">
          <view @click="changeDefault" class="left">
            <Check v-model="state.form.default" />
            <view class="text">默认寄件地址</view>
          </view>
          <view @click="clean" class="btn">清空</view>
        </view>
      </view>
    </view>
  </view>
  <view class="botbar">
    <view @click="ok" class="btn">
      <image src="/static/images/address-edit-ok.png" mode="widthFix" class="bg" />
      确定
    </view>
  </view>
  <u-picker
    mode="region"
    v-model="state.showRegion"
    :params="params"
    @confirm="regionConfirm"></u-picker>
</template>

<script setup>
  import { computed, reactive } from 'vue'
  import { useQuery } from '../../hooks/useQuery'
  import Check from '../../components/check/Check.vue'

  defineOptions({
    inheritAttrs: false,
  })

  const query = useQuery()

  console.log(query)

  const state = reactive({
    showRegion: false,
    region: null,
    form: {
      name: '',
      phone: '',
      address: '',
      default: false,
    },
  })

  const params = {
    province: true,
    city: true,
    area: true,
  }

  const showRegion = () => {
    state.showRegion = true
  }

  const regionConfirm = region => {
    state.region = region
  }

  const regionText = computed(() => {
    return state.region
      ? state.region.province.label + ' ' + state.region.city.label + ' ' + state.region.area.label
      : '请选择省市区'
  })

  const changeDefault = () => {
    state.form.default = !state.form.default
  }

  const clean = () => {
    state.form.name = ''
    state.form.phone = ''
    state.form.address = ''
  }

  const ok = () => {
    uni.navigateBack({ url: '/pages/address/list' })
  }

  const toAddress = () => {
    uni.navigateBack({ url: '/pages/address/list' })
  }
</script>

<style scoped lang="scss">
  .page {
    background: #fefbf6;
    position: relative;
    .top-bg {
      width: 100%;
      position: absolute;
      z-index: 0;
    }
  }

  .form {
    width: 700rpx;
    margin: 175rpx auto 0;
    background: #ffffff;
    border-radius: 30rpx;
    padding: 0 25rpx;
    position: relative;
    z-index: 1;
    .row {
      height: 100rpx;
      display: flex;
      align-items: center;
      border-bottom: 1px solid #e8e8e8;
      position: relative;
      &:last-child {
        border-bottom: 0;
      }
      .label {
        width: 160rpx;
        font-size: 28rpx;
      }
      .input {
        width: 488rpx;
        height: 60rpx;
        line-height: 60rpx;
        font-size: 28rpx;
      }
      .value {
        color: #888a88;
        font-size: 28rpx;
      }
      .name {
        width: 304rpx;
      }
      .btn {
        width: 170rpx;
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
      .arrow {
        width: 16rpx;
        position: absolute;
        top: 50%;
        right: 5rpx;
        transform: translateY(-50%);
      }
      .wrap {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        .left {
          display: flex;
          align-items: center;
          .text {
            margin-left: 20rpx;
          }
        }
      }
    }
  }

  .botbar {
    width: 750rpx;
    height: 130rpx;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #ffffff;
    position: fixed;
    left: 50%;
    bottom: 0;
    transform: translateX(-50%);
    border-top: 1px solid #e8e8e8;
    .btn {
      width: 690rpx;
      height: 88rpx;
      font-size: 28rpx;
      color: #ffffff;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 20rpx;
      position: relative;
      .bg {
        width: 100%;
        position: absolute;
        z-index: -1;
      }
    }
  }
</style>
