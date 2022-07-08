<template>
  <!-- 首页 -->
  <div>
    <van-row>
      <van-col span="24"> HOME </van-col>
    </van-row>
    <!-- TAB -->
    <van-row>
      <van-col span="8"> 月收益率 总收益率 </van-col>
    </van-row>
    <van-list
      v-model:loading="loading"
      :finished="finished"
      finished-text="没有更多了"
      @load="onLoad"
    >
      <van-cell v-for="item in list" :key="item" :title="item" />
    </van-list>
    <!-- LIST -->
    <van-row>
      <!-- <van-row>
      <van-col span="4"> <VanImage></VanImage> </van-col>
      <van-col span="20">
        <div>{{ userName }}</div>
        <div>{{ user }}</div>
      </van-col>
    </van-row> -->
      <van-row gutter="20">
        <van-col span="8">
          <div class="black">￥{{ accountMoney }}</div>
          <div class="text">账户资金</div>
        </van-col>
        <van-col span="8">
          <div :class="{ red: !isPositive }" class="green">
            {{ monthReturns }}%
          </div>
          <div class="text">月收益率</div>
        </van-col>
        <van-col span="8">
          <div :class="{ red: !isPositive }" class="green">
            ￥{{ monthIncome }}
          </div>
          <div class="text">月收益额</div>
        </van-col>
      </van-row>
    </van-row>
  </div>
</template>

<script>
export default {
  name: "HOME",
  data() {
    return {
      accountMoney: 12814,
      monthReturns: 23521,
      monthIncome: 1223,
      isPositive: true,
    };
  },
};
</script>

<style>
.text {
  color: #c8c9cc;
}
.black {
  color: #000000;
}
.green {
  color: #07c160;
}
.red {
  color: #ee0a24;
}
</style>
