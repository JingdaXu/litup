<template>
  <div class="detail">
    <van-row class="row1">
      <van-col :span="12" class="text-left">
        <span>{{ detail["symbol"] }}</span>
        <van-tag :type="detail.direction == 'long' ? 'success' : 'danger'">
          {{ detail.direction == "long" ? "多" : "空 "
          }}{{ detail["margin-level"] }}倍</van-tag
        >
      </van-col>
    </van-row>
    <van-divider />

    <van-row class="row1">
      <van-col :span="12" class="number"
        >${{ detail["average-price-c"] }}</van-col
      >
      <van-col :span="12" class="number green"
        >{{ $numFilter(Number(detail["pnl"]), 2) }}%</van-col
      >
      <van-col :span="12" class="text">平仓均价</van-col>
      <van-col :span="12" class="text">收益率</van-col>
    </van-row>
    <van-row class="row1">
      <van-col :span="12" class="number"
        >${{ detail["average-price-o"] }}</van-col
      >
      <van-col :span="12" class="number green" :class="{'red':detail['pnl-usdt']<0 }">
      {{
        detail["pnl-usdt"]
      }}</van-col>
      <van-col :span="12" class="text">开仓均价</van-col>
      <van-col :span="12" class="text">收益</van-col>
    </van-row>
    <van-divider />

    <van-row class="row2">
      <van-col :span="6" class="text2">持仓量（最大时）</van-col>
      <van-col :span="6" class="number">{{ detail["max-holding"] }}张</van-col>
      <van-col :span="6" class="text2">交易额</van-col>
      <van-col :span="6" class="number">${{ detail["volume"] }}</van-col>
    </van-row>
    <van-row class="row2">
      <van-col :span="6" class="text2">持仓价值（最大时）</van-col>
      <van-col :span="6" class="number"
        >{{ $numFilter(Number(detail["max-holding-value"]), 5) }}{{detail['base-asset']}}</van-col
      >
      <van-col :span="6" class="text2">手续费</van-col>
      <van-col :span="6" class="number">${{ detail["fees"] }}</van-col>
    </van-row>
    <van-row class="row2">
      <van-col :span="6" class="text2">保证金（最大时）</van-col>
      <van-col :span="6" class="number">{{
        $numFilter(Number(detail["margin"]), 5)
      }}</van-col>
    </van-row>
    <van-divider />

    <van-row
      justify="space-around"
      class="row3"
      v-for="(item, index) in detail.details"
      :key="index"
    >
      <van-col :span="6">
        <van-icon v-if="item.type == 'open'" name="minus" class="red" />
        <van-icon v-if="item.type == 'close'" name="plus" class="green" />
        {{ item.date }}
      </van-col>
      <van-col :span="6">{{ item.amount }}张</van-col>
      <van-col :span="6">${{ $numFilter(Number(item.value), 5) }}</van-col>
      <van-col
        :span="6"
        :class="{ red: item.type == 'open', green: item.type == 'close' }"
        >{{ item.type == "open" ? "卖出开空" : "买入平空" }}</van-col
      >
    </van-row>
  </div>
  <div class="bottom">已经全部加载完毕</div>
</template>

<script>
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";
import { apiGetOrderDetail } from "@/api/order";

export default {
  name: "OrderDetail",
  setup() {
    let detail = ref({});
    const route = useRoute();
    const id = route.query.orderId;
    const getApiDetail = async () => {
      await apiGetOrderDetail(id).then((res) => {
        detail.value = res.data;
      });
    };
    onMounted(() => {
      getApiDetail();
    });
    return { detail };
  },
  methods: {},
};
</script>

<style lang="less">
@import "@/assets/less/common.less";
@import "@/assets/less/varibles.less";
.detail {
  background: white;
  .number {
    font-size: 24px;
  }
}

.bottom {
  text-align: center;
  margin-top: 10px;
}
.row1,
.row2,
.row3 {
  background: white;
  padding: 15px;
  padding-left: 20px;
  text-align: left;
  font-size: 14px;
  .text {
    text-align: left;
  }
}
.row1 {
  .text-left {
    font-size: 18px;
  }
}
.row2 {
  padding: 5px 15px;
  font-size: 14px;
  .number {
    font-size: 14px;
  }
}
.row3 {
  padding: 5px 15px;
}
</style>