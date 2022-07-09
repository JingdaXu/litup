<template>
  <div class="order-box" v-for="(item, index) in orderList" :key="index">
    <van-row class="row1">
      <van-col :span="12" class="left">
        <span>{{ item.name }}</span>
        <span>{{ item.number1 }}</span>
      </van-col>
      <van-col :span="12" class="right"> {{ item.time }}</van-col>
    </van-row>
    <div class="row2">
      <van-row>
        <van-col :span="6">开仓均价</van-col>
        <van-col :span="6" class="number">￥{{ item.price }}</van-col>
        <van-col :span="6">收益率</van-col>
        <van-col :span="6" class="green">{{ item.rate }}</van-col>
      </van-row>
    </div>
    <div class="row3">
      <van-row>
        <van-col :span="6">平仓均价</van-col>
        <van-col :span="6" class="number">￥{{ item.number2 }}</van-col>
        <van-col :span="6">收益</van-col>
        <van-col :span="6" class="green">{{ item.income }}</van-col>
      </van-row>
    </div>
  </div>
</template>

<script>
export default {
  name: "orderList",
  data() {
    return {
      orderList: [
        {
          name: "BCH-USDT-SWAP",
          number1: "多20倍",
          time: "06-24 16:36",
          price: "773.31",
          rate: "+7.58835375",
          number2: "778.83",
          income: "+7.5883535",
        },
        {
          name: "BCH-USDT-SWAP",
          number1: "多20倍",
          time: "06-24 16:36",
          price: "773.31",
          rate: "+7.58835375",
          number2: "778.83",
          income: "+7.5883535",
        },
        {
          name: "BCH-USDT-SWAP",
          number1: "多20倍",
          time: "06-24 16:36",
          price: "773.31",
          rate: "+7.58835375",
          number2: "778.83",
          income: "+7.5883535",
        },
        {
          name: "BCH-USDT-SWAP",
          number1: "多20倍",
          time: "06-24 16:36",
          price: "773.31",
          rate: "+7.58835375",
          number2: "778.83",
          income: "+7.5883535",
        },
        {
          name: "BCH-USDT-SWAP",
          number1: "多20倍",
          time: "06-24 16:36",
          price: "773.31",
          rate: "+7.58835375",
          number2: "778.83",
          income: "+7.5883535",
        },
      ],
    };
  },
};
</script>

<style lang="less">
@import "@/assets/less/common.less";
@import "@/assets/less/varibles.less";
.row1 {
  margin-bottom: 10px;
  .left {
    font-size: 18px;
    padding: 5px;
    span:last-child {
      padding: 5px;
      background-color: @green;
      color: white;
      border-radius: 5px;
    }
  }
  .right {
    font-size: 16px;
    padding: 5px;
    text-align: right;
  }
}
.row2,
.row3 {
  padding: 5px;
  color: @text-color-main2;
  .number {
    color: @text-color-main1;
  }
}
.order-box {
  padding: 15px;
  text-align: left;
  border-bottom: 1px solid @grey;
}
</style>