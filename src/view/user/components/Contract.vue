<template>
  <div class="module">
    <div class="title">合约仓位</div>
    <van-row class="box-list" >
      <van-col  :key="index" v-for="(item, index) in contractList">
        <div class="box text-left">
          <div class="contractName">{{ item.contractName }}</div>
          <div class="other rate">{{ item.rate }}%</div>
          <div class="other price">均价 ￥{{ item.price }}</div>
          <div class="other">数量 {{ item.number }}</div>
          <div class="other">价值 {{ item.value }}</div>
        </div>
      </van-col>
    </van-row>
  </div>
</template>

<script>
export default {
  name: "MyContract",
  data() {
    return {
      contractList: [
        {
          contractName: "BCH/USDT永续 多",
          rate: -51.25,
          price: 768.11,
          number: 18.5,
          value: 185,
        },
        {
          contractName: "BCH/USDT永续 多",
          rate: -51.25,
          price: 768.11,
          number: 18.5,
          value: 185,
        },
        {
          contractName: "BCH/USDT永续 多",
          rate: -51.25,
          price: 768.11,
          number: 18.5,
          value: 185,
        },
        {
          contractName: "BCH/USDT永续 多",
          rate: -51.25,
          price: 768.11,
          number: 18.5,
          value: 185,
        },
      ],
    };
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
  .box-list {
    .box {
      border: 1px solid #dcdee0;
      margin:10px 10px;
      .contractName{
        color:@green;
        padding: 5px 2px;
        background: #eefff6;
      }
      .other{
        padding: 3px 10px;
        font-size:14px;
        color:@text-color-main2;
      }
      .rate{
        font-size: 24px;
        padding: 10px 10px;
        color:@red;
      }
    }
    
  }
}
</style>