<template>
  <!-- TAB -->
  <van-tabs v-model:active="active">
    <van-tab title="主页">
      <!-- LIST -->
      <van-list
        v-model:loading="loading"
        :finished="finished"
        finished-text="没有更多了"
        @load="onLoad"
      >
      </van-list>
    </van-tab>
    <van-tab title="持仓">
    </van-tab>
  </van-tabs>
</template>

<script>
export default {
  name: "MyUser",
};
</script>

<style></style>
