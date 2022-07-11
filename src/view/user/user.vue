<template>
  <van-row gutter="20" class="box1">
    <van-col span="4">
      <VanImage
        round
        width="4rem"
        height="4rem"
        :src="userObj.avatar"
      ></VanImage>
      <!-- src="https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg" -->
    </van-col>
    <van-col span="20">
      <div class="user-name">
        <span>{{ userObj.nick_name }}</span>
        <!-- <span><van-icon name="like-o" />{{ likeNumber }}</span> -->
      </div>
    </van-col>
  </van-row>

  <!-- TAB -->
  <van-tabs v-model:active="active" color="#1989fa">
    <van-tab title="主页">
      <Account :userObj="userObj" />
      <Profit :userObj="userObj" />
      <Contract :userObj="userObj" />
      <Operation :userObj="userObj" />
    </van-tab>
    <van-tab title="持仓">
      <Order />
    </van-tab>
    <van-tab title="观点"> </van-tab>
  </van-tabs>
</template>

<script>
import Account from "./components/Account";
import Profit from "./components/Profit";
import Contract from "./components/Contract";
import Operation from "./components/Operation";
import Order from "./order/order";
import { apiGetUser } from "@/api/user";
import { useRoute } from "vue-router";
import { ref, onMounted } from "vue";
export default {
  name: "MyUser",
  components: {
    Account,
    Profit,
    Contract,
    Operation,
    Order,
  },
  setup() {
    // 声明变量
    const userObj = ref({});
    const userActions = ref([]);
    const active = ref(0);
    // 获得用户ID
    const route = useRoute();
    const id = route.query.userId;
    const getApi = async () => {
      // 调用户接口
      await apiGetUser(id).then((res) => {
        userObj.value = res.data;
      });
    };
    onMounted(() => {
      getApi();
    });
    return { userObj, userActions, active };
  },
 
};
</script>

<style lang="less">
.box1 {
  padding: 15px;
  background-color: #fff;
  margin-bottom: 5px;
  .user-name {
    text-align: left;
    margin-left: 10px;
    span {
      display: inline-block;
      margin-left: 10px;
    }
  }
}
</style>
