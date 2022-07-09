<template>
  <div class="container">
    <van-tabs type="card" v-model:active="active" color="#969799" shrink>
      <van-tab title="当前持仓"> <OrderList /></van-tab>
      <van-tab title="历史持仓"> <OrderList /></van-tab>
    </van-tabs>
  </div>
</template>

<script>
import OrderList from "./components/OrderList";
import { ref } from "vue";
import { apiGetOrder } from "@/api/order";
// import axios from "@/service";
export default {
  name: "MyOrder",
  components: {
    OrderList,
  },
  setup() {
    const active = ref(0);
    apiGetOrder().then((res) => {
      console.log(res);
    });
    // axios
    //   .get("http://dev.coder-spring.litup.me:12500/order/", "{of_user}")
    //   .then((res) => {
    //     console.log(res);
    //   });

    return { active };
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