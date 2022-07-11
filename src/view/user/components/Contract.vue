<template>
  <div class="module">
    <div class="title">合约仓位</div>
    <van-row class="box-list">
      <van-col :key="index" v-for="(item, index) in userObj.positions">
        <div class="box text-left">
          <div class="contractName">
            {{ contractName(item) }}
          </div>
          <div class="other rate">{{ numFilter(item.position) }}%</div>
          <div class="other price">
            均价 ￥{{ item["avg-price"] + item["price-unit"] }}
          </div>
          <div class="other">数量 {{ item.amount }}</div>
          <div class="other">价值 {{ item.val }}</div>
        </div>
      </van-col>
    </van-row>
  </div>
</template>

<script>
export default {
  name: "MyContract",
  props: {
    userObj: {
      type: Object,
    },
  },
  computed: {},
  methods: {
    contractName(item) {
      let text = item.direction == "long" ? "多" : "空";
      let res = item.symbol + item.contract + text;
      return res;
    },
    numFilter(value) {
      const realVal = parseFloat(value * 100).toFixed(2);
      return realVal;
    },
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
      margin: 10px 5px;
      .contractName {
        color: @green;
        padding: 5px 2px;
        background: #eefff6;
      }
      .other {
        padding: 3px 10px;
        font-size: 14px;
        color: @text-color-main2;
      }
      .rate {
        font-size: 24px;
        padding: 10px 10px;
        color: @red;
      }
    }
  }
}
</style>