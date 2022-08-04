
<template>
  <div class="module">
    <div class="title">最新操作</div>
    <van-steps
      direction="vertical"
      :active="0"
      v-for="(item, index) in userActions"
      :key="index"
    >
      <van-step class="text-left">
        <p class="black content">
          {{ item["feeds-text-template"] }}
        </p>
        <p class="black content">{{ item["date"] }}</p>
      </van-step>
    </van-steps>
  </div>
</template>
<script>
import { ref, onMounted } from "vue";
import { apiGetUserActions } from "@/api/user";
import { useRoute } from "vue-router";

export default {
  name: "MyOperation",
  props: {
    userObj: {
      type: Object,
    },
  },
  setup() {
    const userActions = ref([]);
    // 获得用户ID
    const route = useRoute();
    const id = route.query.userId;
    // 调用户动作接口
    const getApi = async () => {
      let res = await apiGetUserActions(id);
      if (res) {
        userActions.value = res.data;
        userActions.value.forEach((item) => {
          let str = item["feeds-text-template"];
          let substitutes = item.substitutes;
          str = str.replace("{username}", substitutes.username);
          str = str.replace("{exchange}", substitutes.exchange);
          str = str.replace("{price}", substitutes.price);
          str = str.replace("{action}", substitutes.action);
          str = str.replace("{action-text}", substitutes["action-text"]);
          str = str.replace("{symbol}", substitutes.symbol);
          str = str.replace("{contract}", substitutes.contract);
          str = str.replace("{amount}", substitutes.amount);
          str = str.replace("{deal-amount}", substitutes["deal-amount"]);
          item["feeds-text-template"] = str;
        });
      }
    };
    onMounted(() => {
      getApi();
    });
    return {
      userActions,
    };
  },
};
</script>
<style lang="less">
@import "@/assets/less/common.less";
@import "@/assets/less/varibles.less";

.title {
  padding: 15px;
  text-align: left;
  border-bottom: 1px solid @grey;
}
.content {
  margin: 0;
}
</style>