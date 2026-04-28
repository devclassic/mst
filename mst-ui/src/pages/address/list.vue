<template>
  <view class="page">
    <view @click="uni.navigateBack()" class="back">
      <image src="/static/images/back.png" mode="widthFix" class="bg" />
    </view>
    <image src="/static/images/address-top-bg.png" mode="widthFix" class="top-bg" />
    <view class="tab">
      <view @click="tabSwitch(1)" class="item" :class="{ active: state.type === 1 }">寄件地址</view>
      <view @click="tabSwitch(2)" class="item" :class="{ active: state.type === 2 }">收件地址</view>
    </view>
    <view class="search">
      <image src="/static/images/address-search.png" mode="widthFix" class="bg" />
      <input type="text" placeholder="输入手机号查询" class="input" />
    </view>
    <view class="list">
      <view v-for="(item, index) in state.items" :key="index" class="item-box">
        <view v-if="state.showCheck" @click="check(item)" class="check">
          <Check v-model="item.check" />
        </view>
        <view class="item" :class="{ active: item.default }">
          <view class="row1">
            <view class="left">{{ prefix }}：{{ item.name }}</view>
            <view class="right">{{ item.phone }}</view>
          </view>
          <view class="row2">{{ item.address }}</view>
          <view class="line"></view>
          <view class="row3">
            <view @click="setDefault(item)" class="left">
              <Check v-model="item.default" />
              <view class="text">默认寄件地址</view>
            </view>
            <view class="right">
              <view @click="remove(item)" class="btn">删除</view>
              <view @click="edit(item)" class="btn">编辑</view>
            </view>
          </view>
        </view>
      </view>
    </view>
  </view>
  <view v-if="state.showBotbar1" class="botbar1">
    <view @click="manage" class="btn1">管理</view>
    <view @click="add" class="btn2">
      <image src="/static/images/address-botbar1-btn2.png" mode="widthFix" class="bg" />
      新增{{ typetext }}地址
    </view>
  </view>
  <view v-if="state.showBotbar2" class="botbar2">
    <div @click="all" class="left">
      <Check class="check" />
      <view class="all">全选</view>
    </div>
    <view class="right">
      <view @click="batchRemove" class="btn1">删除</view>
      <view @click="complete" class="btn2">
        <image src="/static/images/address-botbar2-btn2.png" mode="widthFix" class="bg" />
        完成
      </view>
    </view>
  </view>
</template>

<script setup>
  import { computed, reactive } from 'vue'
  import Check from '../../components/check/Check.vue'

  const state = reactive({
    type: 1, // 1寄件人 2收件人
    showCheck: false,
    showBotbar1: true,
    showBotbar2: false,
    checkAll: false,
    items: [
      {
        name: '路人甲',
        phone: '18888888888',
        address: '内蒙古包头市青山区文化路至新南街61号兰苑5栋3单元5楼46号',
        default: true,
      },
      {
        name: '路人乙',
        phone: '18888888888',
        address: '内蒙古包头市青山区文化路至新南街61号兰苑5栋3单元5楼46号',
      },
      {
        name: '路人乙',
        phone: '18888888888',
        address: '内蒙古包头市青山区文化路至新南街61号兰苑5栋3单元5楼46号',
      },
      {
        name: '路人乙',
        phone: '18888888888',
        address: '内蒙古包头市青山区文化路至新南街61号兰苑5栋3单元5楼46号',
      },
      {
        name: '路人乙',
        phone: '18888888888',
        address: '内蒙古包头市青山区文化路至新南街61号兰苑5栋3单元5楼46号',
      },
      {
        name: '路人乙',
        phone: '18888888888',
        address: '内蒙古包头市青山区文化路至新南街61号兰苑5栋3单元5楼46号',
      },
      {
        name: '路人乙',
        phone: '18888888888',
        address: '内蒙古包头市青山区文化路至新南街61号兰苑5栋3单元5楼46号',
      },
    ],
  })

  const prefix = computed(() => {
    return state.type === 1 ? '寄件人' : '收件人'
  })

  const typetext = computed(() => {
    return state.type === 1 ? '寄件' : '收件'
  })

  const tabSwitch = type => {
    state.type = type
  }

  const manage = () => {
    state.showBotbar1 = false
    state.showBotbar2 = true
    state.showCheck = true
  }

  const all = () => {
    state.checkAll = !state.checkAll
    state.items.forEach(item => {
      item.check = state.checkAll
    })
  }

  const setDefault = item => {
    state.items.forEach(item => {
      item.default = false
    })
    item.default = true
  }

  const check = item => {
    item.check = !item.check
  }

  const add = item => {
    uni.navigateTo({ url: `/pages/address/edit?type=${state.type}&action=add` })
  }

  const edit = item => {
    uni.navigateTo({ url: `/pages/address/edit?type=${state.type}&action=edit` })
  }

  const remove = item => {}

  const batchRemove = () => {}

  const complete = () => {
    state.showBotbar1 = true
    state.showBotbar2 = false
    state.showCheck = false
    state.checkAll = false
    state.items.forEach(item => {
      item.check = state.checkAll
    })
  }
</script>

<style scoped lang="scss">
  .page {
    background: #fefbf6;
    position: relative;
    padding-bottom: 150rpx;
    .top-bg {
      width: 100%;
      position: absolute;
      z-index: 0;
    }
  }

  .tab {
    margin-top: 175rpx;
    display: flex;
    position: relative;
    .item {
      width: 260rpx;
      font-size: 30rpx;
      color: #000000;
      text-align: center;
      &.active {
        color: #ff8800;
      }
    }
  }

  .search {
    height: 88rpx;
    margin-top: 15rpx;
    position: relative;
    .bg {
      width: 100%;
      position: absolute;
    }
    .input {
      width: 600rpx;
      height: 60rpx;
      line-height: 60rpx;
      font-size: 24rpx;
      position: absolute;
      top: 15rpx;
      left: 95rpx;
    }
  }

  .list {
    width: 700rpx;
    margin: 75rpx auto 0;
    .item-box {
      display: flex;
      margin-bottom: 20rpx;
      &:last-child {
        margin-bottom: 0;
      }
      .check {
        margin-right: 20rpx;
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }
    .item {
      padding: 15rpx 30rpx;
      background: #ffffff;
      border-radius: 30rpx;
      &.active {
        background: none;
      }
      .row1 {
        font-size: 30rpx;
        display: flex;
        justify-content: space-between;
        margin-top: 20rpx;
      }
      .row2 {
        color: #666666;
        font-size: 26rpx;
      }
      .line {
        height: 0;
        border-bottom: 1px solid #e5e5e5;
        margin-top: 35rpx;
      }
      .row3 {
        margin-top: 20rpx;
        display: flex;
        justify-content: space-between;
        align-items: center;
        .left,
        .right {
          display: flex;
          align-items: center;
        }
        .left {
          justify-content: flex-start;
          font-size: 24rpx;
          .text {
            margin-left: 20rpx;
          }
        }
        .right {
          justify-content: flex-end;
          .btn {
            width: 160rpx;
            height: 56rpx;
            border: 1px solid #ffaf54;
            border-radius: 30rpx;
            color: #ff8800;
            font-size: 22rpx;
            margin-left: 15rpx;
            display: flex;
            justify-content: center;
            align-items: center;
          }
        }
      }
    }
  }

  .botbar1 {
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
    .btn1 {
      width: 330rpx;
      height: 88rpx;
      background: #f2f3f5;
      font-size: 30rpx;
      color: #ff8800;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 20rpx;
    }
    .btn2 {
      width: 330rpx;
      height: 88rpx;
      margin-left: 30rpx;
      font-size: 30rpx;
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

  .botbar2 {
    width: 750rpx;
    height: 130rpx;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: #ffffff;
    position: fixed;
    left: 50%;
    bottom: 0;
    transform: translateX(-50%);
    border-top: 1px solid #e8e8e8;
    .left {
      display: flex;
      align-items: center;
      .check {
        margin-left: 30rpx;
      }
      .all {
        margin-left: 20rpx;
      }
    }
    .right {
      display: flex;
      justify-content: flex-end;
      align-items: center;
      .btn1 {
        width: 200rpx;
        height: 88rpx;
        background: #f2f3f5;
        font-size: 30rpx;
        color: #ff8800;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 20rpx;
      }
      .btn2 {
        width: 200rpx;
        height: 88rpx;
        margin: 0 30rpx;
        font-size: 30rpx;
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
  }
</style>
