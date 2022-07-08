<template>
  <!-- 首页 -->
  <div>
    <van-row>
      <van-col span="8"> HOME </van-col>
    </van-row>
    <!-- TAB -->
    <van-row>
      <van-col span="8"> 月收益率 </van-col>
      <van-col span="8"> 总收益率 </van-col>
    </van-row>
    <van-list
      v-model:loading="loading"
      :finished="finished"
      finished-text="没有更多了"
      @load="onLoad"
    >
      <!-- LIST -->
      <div v-for="(item, index) in List" :key="index" class="list-box">
        <van-row gutter="20" class="row1">
          <van-col span="4">
            <VanImage
              round
              width="2rem"
              height="2rem"
              src="https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg"
            ></VanImage>
          </van-col>
          <van-col span="20">
            <div class="text-left">{{ item.userName }}</div>
            <div class="text-left">{{ item.signature }}</div>
          </van-col>
        </van-row>
        <van-row gutter="20" justify="space-between" class="row2">
          <van-col span="8">
            <div class="black">￥{{ item.accountMoney }}</div>
            <div class="text">账户资金</div>
          </van-col>
          <van-col span="8">
            <div :class="{ red: !isPositive }" class="green">
              {{ item.monthReturns }}%
            </div>
            <div class="text">月收益率</div>
          </van-col>
          <van-col span="8">
            <div :class="{ red: !isPositive }" class="green">
              ￥{{ item.monthIncome }}
            </div>
            <div class="text">月收益额</div>
          </van-col>
        </van-row>
      </div>
    </van-list>
  </div>
</template>

<script>
export default {
  name: "HOME",
  data() {
    return {
      isPositive: true,
      loading: false,
      finished: true,
      List: [
        {
          userName: "TraderBeiyang",
          signature: "这才是超短线魅力！",
          accountMoney: 12814,
          monthReturns: 23521,
          monthIncome: 1223,
        },
        {
          userName: "TraderBeiyang",
          signature: "这才是超短线魅力！",
          accountMoney: 12814,
          monthReturns: 23521,
          monthIncome: 1223,
        },
        {
          userName: "TraderBeiyang",
          signature: "这才是超短线魅力！",
          accountMoney: 12814,
          monthReturns: 23521,
          monthIncome: 1223,
        },
        {
          userName: "TraderBeiyang",
          signature: "这才是超短线魅力！",
          accountMoney: 12814,
          monthReturns: 23521,
          monthIncome: 1223,
        },
      ],
    };
  },
};
</script>

<style>
.list-box {
  background-color: white;
  padding-top: 10px;
  padding-bottom: 10px;
  margin-bottom: 15px;
}
.row1 {
  margin-bottom: 10px;
  padding-bottom: 10px;
  border-bottom: 1px solid #ebedf0;
}
.row2 {
  margin: 10px 0;
}
.text-left {
  text-align: left;
}
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
