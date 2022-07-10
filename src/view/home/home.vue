<template>
  <!-- 首页 -->
  <div>
    <!-- TAB -->
    <van-tabs v-model:active="active" color="#1989fa">
      <van-tab title="月收益率">
        <!-- LIST -->
        <MyList :list="list1" :type="'monthly'"></MyList>
      </van-tab>
      <van-tab title="总收益率">
        <MyList :list="list2" :type="'total'"></MyList>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
import MyList from "./components/List";
import { apiGetHome } from "@/api/home";
import { onMounted, onUpdated, ref, reactive } from "vue";

export default {
  name: "HOME",
  components: {
    MyList,
  },
  setup() {
    let list1 = ref([]);
    let list2 = ref([]);
    const active = ref(0);
    const getApi = async () => {
      const params = reactive({
        sortby: active.value === 0 ? "monthly" : "total",
      });
      await apiGetHome(params).then((res) => {
        if (active.value === 0) {
          list1.value = res.data;
        } else {
          list2.value = res.data;
        }
      });
    };
    onMounted(() => {
      getApi();
    });
    onUpdated(() => {
      getApi();
    });
    return {
      list1,
      list2,
      active,
    };
  },
};
</script>

<style>
</style>
