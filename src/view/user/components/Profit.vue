<template>
  <div class="module">
    <van-row>
      <van-col :span="8"> <div class="title">收益走势</div> </van-col>
      <van-col :span="24">
        <van-tabs v-model:active="active" color="#1989fa">
          <van-tab title="总收益率">
            <iframe :src="userObj['total-pnl-rate-iframe-url']" class="iframe"/>
          </van-tab>
          <van-tab title="账户资产">
            <iframe :src="userObj['account-balance-iframe-url']" class="iframe"/>
          </van-tab>
          <van-tab title="累计收益">
            <iframe :src="userObj['total-pnl-iframe-url']" class="iframe"/>
          </van-tab>
          <van-tab title="月收益率">
            <iframe :src="userObj['monthly-pnl-iframe-url']" class="iframe"/>
          </van-tab>
        </van-tabs>
      </van-col>
    </van-row>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  name: "MyProfit",
  props: {
    userObj: {
      type: Object,
    },
  },
  setup() {
    const active = ref(0);
    return { active };
  },
};
</script>

<style lang="less">
@import "@/assets/less/common.less";
@import "@/assets/less/varibles.less";
.module {
  margin-bottom: 5px;
  background: white;
  min-height: 20vh;
  .title {
    padding: 15px;
    text-align: left;
    border-bottom: 1px solid @grey;
  }
  .iframe{
    width: 80%;
    border:none;
    height: 230px;
  }
}
</style>