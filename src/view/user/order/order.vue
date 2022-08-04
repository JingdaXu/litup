
<script >
import orderList from "./components/OrderList";
import { onMounted, onUpdated, ref } from "vue";
import { apiGetOrder } from "@/api/order";
import { useRoute } from "vue-router";

export default {
  name: "orderPage",
  components: {
    orderList,
  },
  setup() {
    let list = ref([]);
    const active = ref(0);
    // 获得用户ID
    const route = useRoute();
    const id = route.query.userId;
    const loading = ref(false);
    const finished = ref(false);
    // 加载数据
    const onLoad = async () => {
      finished.value = false ;
      const res = await getApi();
      finished.value = true;
      if (res) {
        // 加载状态结束
        loading.value = false;
        // 数据全部加载完成
      }
    };
    // 请求接口数据
    const getApi = async () => {
      const filter = active.value === 0 ? "unfinished" : "finished";
      const params = `${id}?filter=${filter}`;
      const res = await apiGetOrder(params);
      if (res.data) {
        list.value = res.data;
      }
    };
    // 初次时加载数据
    onMounted(() => {
      onLoad();
    });
    // 更新加载数据
    onUpdated(() => {
      onLoad();
    });
    return {
      list,
      active,
      onLoad,
      loading,
      finished,
    };
  },
};
</script>
<template>
  <div class="container">
    <van-tabs type="card" v-model:active="active" color="#969799" shrink>
      <van-tab title="当前持仓">
        <van-list
          v-model:loading="loading"
          :finished="finished"
          finished-text="没有更多了"
          @load="onLoad"
        >
          <orderList :list="list" />
        </van-list>
      </van-tab>
      <van-tab title="历史持仓">
        <van-list
          v-model:loading="loading"
          :finished="finished"
          finished-text="没有更多了"
          @load="onLoad"
        >
          <orderList :list="list" />
        </van-list>
      </van-tab>
    </van-tabs>
  </div>
</template>


<style lang="less">
@import "@/assets/less/common.less";
@import "@/assets/less/varibles.less";
.container {
  background: white;
  padding-top: 10px;
}
</style>