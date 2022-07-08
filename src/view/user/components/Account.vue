<template>
  <div class="account">
    <div class="title">账户概况</div>
    <van-row class="row1">
      <van-col span="12">
        <div class="green bigFont">￥8433</div>
        <div class="text smallFont">账户资产</div>
      </van-col>
      <van-col span="12">
        <div class="green bigFont">25.16%</div>
        <div class="text smallFont">总收益率</div>
      </van-col>
    </van-row>
    <van-row class="row2 smallFont">
      <van-col span="8">
        <div class="green">￥1745</div>
        <div class="text">累计收益</div>
      </van-col>
      <van-col span="8">
        <div class="green">￥2002605.28%</div>
        <div class="text">月收益率</div>
      </van-col>
      <van-col span="8">
        <div class="green">￥6688</div>
        <div class="text">充值金额</div>
      </van-col>
    </van-row>
    <van-row class="row3 smallFont">
      <van-col span="8">
        <div class="">90.48%</div>
        <div class="text">历史胜率</div>
      </van-col>
      <van-col span="8"></van-col>
      <van-col span="8"></van-col>
    </van-row>
  </div>
</template>

<script>
export default {
  name: "MyAccount",
  data() {
    return {
      userName: "",
      active: 0,
      likeNumber: 0,
    };
  },
};
</script>

<style lang="less">
@import "@/assets/less/common.less";
@import "@/assets/less/varibles.less";

.account {
  background: white;
  padding: 15px;
  .title {
    text-align: left;
    border-bottom: 3px solid @grey;
  }
  .row1,
  .row2,
  .row3 {
    margin-top: 15px;
    margin-bottom: 15px;
  }
}
</style>