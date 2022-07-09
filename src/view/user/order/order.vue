

<template>
  <div class="container">
    <van-tabs type="card" v-model:active="active" color="#969799" shrink>
      <van-tab title="当前持仓"> <orderList :list="list" /></van-tab>
      <van-tab title="历史持仓"> <orderList :list="list" /></van-tab>
    </van-tabs>
  </div>
</template>
<script >
import orderList from "./components/OrderList";
import { onMounted, ref } from "vue";
import { apiGetOrder } from "@/api/order";
export default {
  name: "orderPage",
  components: {
    orderList,
  },
  setup() {
    let list = ref([]);
    const active = ref(0);
    const getApi = async () => {
      await apiGetOrder().then((res) => {
        list.value = res.data;
      });
    };
    onMounted(() => {
      getApi();
    });
    return {
      list,
      active,
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