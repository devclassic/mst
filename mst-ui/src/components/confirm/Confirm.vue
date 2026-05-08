<template>
  <view v-if="model" class="mask">
    <view class="confirm">
      <view class="content">
        <text class="text">{{ props.text }}</text>
      </view>
      <view class="btns">
        <view @click="model = false" class="btn">取消</view>
        <view @click="ok" class="btn">确定</view>
      </view>
    </view>
  </view>
</template>

<script setup>
  const model = defineModel()
  const props = defineProps(['text'])
  const emit = defineEmits(['ok'])

  const ok = () => {
    emit('ok')
    model.value = false
  }
</script>

<style scoped lang="scss">
  .mask {
    width: 750rpx;
    height: 100vh;
    background: rgba(0, 0, 0, 0.8);
    position: fixed;
    top: 50%;
    left: 50%;
    z-index: 1000;
    transform: translate(-50%, -50%);
    .confirm {
      width: 550rpx;
      height: 270rpx;
      background: #ffffff;
      border-radius: 30rpx;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      .content {
        height: 185rpx;
        border-bottom: 1px solid #e8e8e8;
        display: flex;
        justify-content: center;
        align-items: center;
        .text {
          color: #333333;
          font-size: 30rpx;
          line-height: 1.5;
          text-align: center;
        }
      }
      .btns {
        height: 85rpx;
        display: flex;
        .btn {
          height: 100%;
          flex: 1;
          font-size: 30rpx;
          color: #4586ff;
          display: flex;
          justify-content: center;
          align-items: center;
          border-right: 1px solid #e8e8e8;
          &:last-child {
            border-right: 0;
          }
        }
      }
    }
  }
</style>
