<template>
  <view class="page">
    <image @click="uni.navigateBack()" src="/static/back.png" class="back" />
    <image src="/static/top.png" class="top-bg" />
    <view class="tab">
      <view @click="state.type = 1" class="item" :class="{ active: state.type === 1 }">
        寄件地址
      </view>
      <view @click="state.type = 2" class="item" :class="{ active: state.type === 2 }">
        收件地址
      </view>
    </view>
    <view class="search">
      <image src="/static/addr-list-search.png" class="bg" />
      <input
        type="text"
        placeholder="输入 手机号 运单号 姓名 查快递"
        placeholder-style="color:#cccccc"
        class="input" />
    </view>
    <view class="list">
      <view v-for="item in state.items" class="wrap">
        <view v-if="state.showCheck" class="check">
          <u-checkbox
            v-model="item.check"
            shape="circle"
            size="40rpx"
            @change="checkChange($event, item)" />
        </view>
        <view class="item" :class="{ active: item.default }">
          <view class="row1">
            <view class="name">{{ type }}人：{{ item.name }}</view>
            <view class="num">{{ item.tel }}</view>
          </view>
          <view class="row2">{{ item.addr }}</view>
          <view class="row3">
            <view class="left">
              <u-checkbox
                v-model="item.default"
                shape="circle"
                size="40rpx"
                :label="`默认${type}地址`"
                label-size="26rpx"
                @change="checkDefaultChange($event, item)" />
            </view>
            <view class="right">
              <view class="btn">删除</view>
              <view class="btn">编辑</view>
            </view>
          </view>
        </view>
      </view>
    </view>
    <view v-if="!state.showBotbar2" class="botbar1">
      <view @click="manage" class="btn1">
        <image src="/static/addr-list-botbar-btn1.png" class="bg" />
        <view class="text">管理</view>
      </view>
      <view class="btn2">
        <image src="/static/addr-list-botbar-btn2.png" class="bg" />
        <view class="text">新增{{ type }}地址</view>
      </view>
    </view>
    <view v-if="state.showBotbar2" class="botbar2">
      <view class="left">
        <u-checkbox
          v-model="state.checkAll"
          shape="circle"
          size="40rpx"
          label="全选"
          label-size="26rpx"
          @change="checkAllChange($event)" />
      </view>
      <view class="right">
        <view class="btn1">
          <image src="/static/addr-list-botbar-btn3.png" class="bg" />
          <view class="text">删除</view>
        </view>
        <view @click="complete" class="btn2">
          <image src="/static/addr-list-botbar-btn4.png" class="bg" />
          <view class="text">完成</view>
        </view>
      </view>
    </view>
  </view>
</template>

<script setup>
  import { computed, reactive } from 'vue'

  const state = reactive({
    type: 1, // 1寄件 2收件
    showCheck: false,
    checkAll: false,
    showBotbar2: false,
    items: [
      {
        name: '路人甲',
        tel: '13847253707',
        addr: '内蒙古包头市青山区文化路至新南街61号兰苑5栋3单元5楼46号',
        default: true,
      },
      {
        name: '路人甲',
        tel: '13847253707',
        addr: '内蒙古包头市青山区文化路至新南街61号兰苑5栋3单元5楼46号',
      },
      {
        name: '路人甲',
        tel: '13847253707',
        addr: '内蒙古包头市青山区文化路至新南街61号兰苑5栋3单元5楼46号',
      },
      {
        name: '路人甲',
        tel: '13847253707',
        addr: '内蒙古包头市青山区文化路至新南街61号兰苑5栋3单元5楼46号',
      },
      {
        name: '路人甲',
        tel: '13847253707',
        addr: '内蒙古包头市青山区文化路至新南街61号兰苑5栋3单元5楼46号',
      },
      {
        name: '路人甲',
        tel: '13847253707',
        addr: '内蒙古包头市青山区文化路至新南街61号兰苑5栋3单元5楼46号',
      },
      {
        name: '路人甲',
        tel: '13847253707',
        addr: '内蒙古包头市青山区文化路至新南街61号兰苑5栋3单元5楼46号',
      },
    ],
  })

  const type = computed(() => {
    return state.type === 1 ? '寄件' : '收件'
  })

  const checkDefaultChange = (check, item) => {
    state.items.forEach(item => {
      item.default = false
    })
    item.default = check
  }

  const checkChange = (check, item) => {
    item.check = check
    state.checkAll = state.items.every(item => item.check)
  }

  const checkAllChange = check => {
    state.items.forEach(item => {
      item.check = check
    })
  }

  const manage = async () => {
    state.items.forEach(item => {
      item.check = false
    })
    state.showCheck = true
    state.showBotbar2 = true
  }

  const complete = async () => {
    state.showCheck = false
    state.showBotbar2 = false
  }
</script>

<style scoped lang="scss">
  .page {
    padding-bottom: 148rpx;
    .back {
      width: 18rpx;
      height: 31rpx;
      position: absolute;
      top: 100rpx;
      left: 25rpx;
      z-index: 1000;
    }
    .top-bg {
      width: 100%;
      height: 500rpx;
      position: absolute;
      z-index: 0;
    }
    .tab {
      width: 600rpx;
      margin: 175rpx auto 0;
      color: #000000;
      position: relative;
      display: flex;
      .item {
        margin-right: 130rpx;
        &:last-child {
          margin-right: 0;
        }
        &.active {
          color: #ff8800;
        }
      }
    }
    .search {
      height: 88rpx;
      margin-top: 20rpx;
      position: relative;
      .bg {
        width: 100%;
        height: 88rpx;
        position: absolute;
        z-index: 0;
      }
      .input {
        width: 610rpx;
        height: 60rpx;
        font-size: 26rpx;
        position: absolute;
        top: 14rpx;
        left: 90rpx;
      }
    }
    .list {
      width: 700rpx;
      margin: 75rpx auto 0;
      position: relative;
      .wrap {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 20rpx;
        &:last-child {
          margin-bottom: 0;
        }
        .check {
          width: 60rpx;
          display: flex;
          justify-content: flex-start;
          align-items: center;
        }
        .item {
          padding: 35rpx 30rpx 15rpx;
          line-height: 1;
          background: #ffffff;
          border-radius: 30rpx;
          &.active {
            background: none;
          }
          .row1 {
            display: flex;
            justify-content: space-between;
            color: #000000;
            .name {
              font-size: 30rpx;
            }
            .num {
              font-size: 26rpx;
            }
          }
          .row2 {
            color: #666666;
            font-size: 26rpx;
            margin-top: 15rpx;
            line-height: 1.5;
          }
          .row3 {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-top: 40rpx;
            border-top: 1px solid #e5e5e5;
            padding-top: 20rpx;
            .left {
              display: flex;
              align-items: center;
              :deep(.u-checkbox__label) {
                color: #000000;
              }
            }
            .right {
              display: flex;
              justify-content: flex-end;
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
    }
    .botbar1 {
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
      .btn1 {
        width: 330rpx;
        height: 88rpx;
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        .bg {
          width: 330rpx;
          height: 88rpx;
          position: absolute;
          z-index: 0;
        }
        .text {
          position: relative;
          font-size: 30rpx;
          color: #ff8800;
        }
      }
      .btn2 {
        width: 330rpx;
        height: 88rpx;
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        .bg {
          width: 330rpx;
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
    .botbar2 {
      width: 750rpx;
      height: 128rpx;
      border-top: 1px solid #e8e8e8;
      position: fixed;
      left: 50%;
      bottom: 0;
      transform: translateX(-50%);
      background: #ffffff;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .left {
        padding-left: 30rpx;
        :deep(.u-checkbox__label) {
          color: #000000;
        }
      }
      .right {
        display: flex;
        justify-content: flex-end;
        align-items: center;
        .btn1 {
          width: 200rpx;
          height: 88rpx;
          position: relative;
          display: flex;
          justify-content: center;
          align-items: center;
          .bg {
            width: 200rpx;
            height: 88rpx;
            position: absolute;
            z-index: 0;
          }
          .text {
            position: relative;
            font-size: 30rpx;
            color: #ff8800;
          }
        }
        .btn2 {
          width: 200rpx;
          height: 88rpx;
          position: relative;
          display: flex;
          justify-content: center;
          align-items: center;
          margin: 0 20rpx 0 30rpx;
          .bg {
            width: 200rpx;
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
  }
</style>
