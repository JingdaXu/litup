<template>
  <div class="module">
    <div class="title">合约仓位</div>
    <van-row class="box-list">
      <van-col
        v-if="userObj.positions && userObj.positions.length == 0"
        class="empty"
        >{{ userObj.nick_name }}暂无持仓</van-col
      >
      <van-col :key="index" v-for="(item, index) in userObj.positions" v-else>
        <div class="box text-left">
          <div class="contractName">
            {{ contractName(item) }}
          </div>
          <div class="other rate">
            {{ $numFilter(Number(item.position), 2) }}%
          </div>
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
    .empty {
      text-align: center;
      width: 100%;
      height: 100%;
      line-height: 130px;
    }
  }
}
</style>