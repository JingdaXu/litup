<template>
  <div class="module">
    <div class="title">账户概况</div>
    <van-row class="row1">
      <van-col span="12">
        <div class="green bigFont">{{ userObj["balance"] }}</div>
        <div class="text smallFont">账户资产</div>
      </van-col>
      <van-col span="12">
        <div class="green bigFont">{{ userObj["total-yield"] * 100 }} %</div>
        <div class="text smallFont">总收益率</div>
      </van-col>
    </van-row>
    <van-row class="row2 smallFont">
      <van-col span="8">
        <div class="green">￥{{ userObj["total-yield-in-unit"] }}</div>
        <div class="text">累计收益</div>
      </van-col>
      <van-col span="8">
        <div class="green">￥{{ numFilter(userObj["monthly-yield"]) }}%</div>
        <div class="text">月收益率</div>
      </van-col>
      <van-col span="8">
        <div class="green">￥{{ userObj["total-refill"] }}</div>
        <div class="text">充值金额</div>
      </van-col>
    </van-row>
    <van-row class="row3 smallFont">
      <van-col span="8">
        <div class="">{{ userObj["win-rate"] }}%</div>
        <div class="text">历史胜率</div>
      </van-col>
      <van-col span="8"></van-col>
      <van-col span="8"></van-col>
    </van-row>
  </div>
</template>

<script >
export default {
  name: "MyAccount",
  props: {
    userObj: {
      type: Object,
    },
  },
  methods: {
    numFilter(value) {
      const realVal = parseFloat(value*100).toFixed(2);
      return realVal;
    },
  },
  setup() {},
};
</script>


<style lang="less">
@import "@/assets/less/common.less";
@import "@/assets/less/varibles.less";

.module {
  background: white;
  .title {
    padding: 15px;
    text-align: left;
    border-bottom: 1px solid @grey;
  }
  .row2,
  .row3 {
    // margin-top: 15px;
    // margin-bottom: 15px;
    padding: 15px 0;
    overflow: hidden;
  }
  .row1 {
    padding-top: 15px;
  }
}
</style>