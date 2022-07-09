<template>
  <div class="module">
    <van-row>
      <van-col :span="8"> <div class="title">收益走势</div> </van-col>
      <van-col :span="16">
        <van-tabs v-model:active="active" color="#1989fa">
          <van-tab title="总收益率">图表 1</van-tab>
          <van-tab title="账户资产">图表 2</van-tab>
          <van-tab title="累计收益">图表 3</van-tab>
          <van-tab title="月收益率">图表 4</van-tab>
        </van-tabs>
      </van-col>
    </van-row>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  name: "MyProfit",
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
  .title {
    padding: 15px;
    text-align: left;
    border-bottom: 1px solid @grey;
  }
}
</style>