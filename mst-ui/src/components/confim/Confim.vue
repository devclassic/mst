<template>
  <view v-if="model" class="mask">
    <view class="confim">
      <view class="text">
        <slot />
      </view>
      <view class="btns">
        <view @click="model = false" class="btn1">取消</view>
        <view @click="ok" class="btn2">确定</view>
      </view>
    </view>
  </view>
</template>

<script setup>
  const model = defineModel()
  const emit = defineEmits(['ok'])

  const ok = () => {
    emit('ok')
    model.value = false
  }
</script>

<style scoped lang="scss">
  .mask {
    width: 750rpx;
    height: 100dvh;
    background: rgba(0, 0, 0, 0.8);
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 999;
  }

  .confim {
    width: 550rpx;
    height: 270rpx;
    background: #ffffff;
    border-radius: 30rpx;
    z-index: 1000;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    .text {
      height: 185rpx;
      border-bottom: 1px solid #e8e8e8;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .btns {
      height: 85rpx;
      color: #4586ff;
      display: flex;
      .btn1 {
        border-right: 1px solid #e8e8e8;
      }
      .btn1,
      .btn2 {
        flex: 1;
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }
  }
</style>
