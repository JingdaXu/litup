<template>
  <div class="container">
    <van-tabs type="card" v-model:active="active" color="#1989fa">
      <van-tab title="当前持仓"> <OrderList /></van-tab>
      <van-tab title="历史持仓"> <OrderList /></van-tab>
    </van-tabs>
  </div>
</template>

<script>
import OrderList from "./components/OrderList";
export default {
  name: "MyOrder",
  components: {
    OrderList,
  },
  data() {
    return {
      active: 0,
    };
  },
};
</script>

<style lang="less">
@import "@/assets/less/common.less";
@import "@/assets/less/varibles.less";
.container {
  background: white;
}
</style>