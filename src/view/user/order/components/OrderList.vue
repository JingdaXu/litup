<template>
  <div class="order-box" v-for="(item, index) in list" :key="index">
    <van-row class="row1">
      <van-col :span="12" class="left">
        <span>{{ item.symbol }}-{{ item.contract }}</span>
        <van-tag :type="item.direction == 'long' ? 'success' : 'danger'">
          {{ item.direction == "long" ? "多" : "空 "
          }}{{ item["margin-level"] }}倍</van-tag
        >
      </van-col>
      <van-col :span="12" class="right" @click="clickDetails(item, index)">
        <span class="time">{{ item["latest-action"] }}</span>
        <!-- <span class="time">{{ $moment(item["latest-action"]).format("YYYY-MM-DD") }}</span> -->
        <span class="arrow"><van-icon name="arrow" /></span>
      </van-col>
    </van-row>
    <div class="row2">
      <van-row>
        <van-col :span="6">开仓均价</van-col>
        <van-col :span="6" class="number">{{
          item["average-price-o"]
        }}</van-col>
        <van-col :span="6">收益率</van-col>
        <van-col :span="6" class="number green"
          >{{ $numFilter(item.pnl, 5) }}%</van-col
        >
      </van-row>
    </div>
    <div class="row3">
      <van-row>
        <van-col :span="6">平仓均价</van-col>
        <van-col :span="6" class="number">{{
          item["average-price-c"]
        }}</van-col>
        <van-col :span="6">收益</van-col>
        <van-col :span="6" class="number green"
          >{{ item["pnl-usdt"] }} USDT</van-col
        >
      </van-row>
    </div>
  </div>
</template>

<script >
// import { ref } from "vue";
import { useRouter } from "vue-router";
export default {
  name: "MyList",
  props: {
    list: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  setup() {
    const router = useRouter();
    const clickDetails = (item) => {
      router.push({ name: "orderDetail", query: { orderId: item.order } });
    };
    return {
      clickDetails,
    };
  },
};
</script>

<style lang="less" scoped>
@import "@/assets/less/common.less";
@import "@/assets/less/varibles.less";
.row1 {
  margin-bottom: 10px;
  .left {
    font-size: 16px;
    padding: 5px;
    padding-left: 3px;
    span {
      padding: 2px;
    }
    span:last-child {
      display: inline-block;
      margin-left: 5px;
      color: white;
      border-radius: 5px;
    }
  }
  .right {
    font-size: 16px;
    padding: 5px;
    text-align: right;
    .time {
      display: inline-block;
      margin-right: 10px;
      color: @text-color-main2;
    }
    .arrow {
      color: @text-color-main2;
    }
  }
}
.row2,
.row3 {
  font-size: 14px;
  padding: 5px;
  color: @text-color-main2;
  .number {
    text-align: center;
  }
}
.order-box {
  padding: 15px;
  text-align: left;
  border-bottom: 1px solid @grey;
}
</style>