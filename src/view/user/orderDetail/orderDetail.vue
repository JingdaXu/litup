<template>
  <div class="detail">
    <van-nav-bar
      title="持仓详情页"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
    />
    <van-row class="row1">
      <van-col :span="12" class="text-left"
        >BNBUSD <van-tag type="danger ">{{ number }}倍</van-tag></van-col
      >
    </van-row>
    <van-divider />

    <van-row class="row1">
      <van-col :span="12" class="number">${{ price }}</van-col>
      <van-col :span="12" class="number green">{{ rate }}%</van-col>
      <van-col :span="12" class="text">平仓均价</van-col>
      <van-col :span="12" class="text">收益率</van-col>
    </van-row>
    <van-row class="row1">
      <van-col :span="12" class="number">${{ price }}</van-col>
      <van-col :span="12" class="number green">+{{ rate }}</van-col>
      <van-col :span="12" class="text">开仓均价</van-col>
      <van-col :span="12" class="text">收益</van-col>
    </van-row>
    <van-divider />

    <van-row class="row2">
      <van-col :span="6" class="text2">持仓量（最大时）</van-col>
      <van-col :span="6" class="number">+{{ rate }}</van-col>
      <van-col :span="6" class="text2">交易额</van-col>
      <van-col :span="6" class="number">${{ price }}</van-col>
    </van-row>
    <van-row class="row2">
      <van-col :span="6" class="text2">持仓价值（最大时）</van-col>
      <van-col :span="6" class="number">+{{ rate }}</van-col>
      <van-col :span="6" class="text2">手续费</van-col>
      <van-col :span="6" class="number">${{ price }}</van-col>
    </van-row>
    <van-row class="row2">
      <van-col :span="6" class="text2">保证金（最大时）</van-col>
      <van-col :span="6" class="number">+{{ rate }}</van-col>
    </van-row>
    <van-divider />

    <van-row
      justify="space-around"
      class="row3"
      v-for="(item, index) in todoList"
      :key="index"
    >
      <van-col :span="6">
        <van-icon
          name="add-o"
          :class="{ red: item.upFlag, green: !item.upFlag }"
        />
        {{ item.time }}</van-col
      >
      <van-col :span="6">{{ item.number }}张</van-col>
      <van-col :span="6">${{ item.price }}</van-col>
      <van-col :span="6" :class="{ red: item.upFlag, green: !item.upFlag }">{{
        item.todo
      }}</van-col>
    </van-row>
  </div>
  <div class="bottom">已经全部加载完毕</div>
</template>

<script>
import { ref } from "vue";
import { useRouter } from "vue-router";
export default {
  name: "OrderDetail",
  setup() {
    const router = useRouter();
    const number = ref(20);
    const price = ref(236.174);
    const rate = ref(34.61);
    const todoList = ref([
      {
        time: "06-25 0708",
        number: "5212",
        price: "240.261",
        todo: "卖出开空",
        upFlag: true,
      },
      {
        time: "06-25 0708",
        number: "5212",
        price: "240.261",
        todo: "买入平空",
        upFlag: false,
      },
    ]);
    const onClickLeft = () => {
      router.go(-1);
    };
    return { number, price, rate, todoList, onClickLeft };
  },
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