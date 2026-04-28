<template>
  <view class="box" :class="{ active: !!model }">
    <image v-show="model" src="/static/images/check.png" mode="widthFix" class="check" />
  </view>
</template>

<script setup>
  const model = defineModel()
</script>

<style scoped lang="scss">
  .box {
    width: 40rpx;
    height: 40rpx;
    border: 2px solid #d7d7d7;
    border-radius: 50%;
    &.active {
      border: 0;
    }
    .check {
      width: 100%;
    }
  }
</style>
