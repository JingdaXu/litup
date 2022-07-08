<template>
  <!-- 首页 -->
  <div>
    <van-row>
      <van-col span="8"> HOME </van-col>
    </van-row>
    <!-- TAB -->
    <van-tabs v-model:active="active">
      <van-tab title="月收益率">
        <!-- LIST -->
        <van-list
          v-model:loading="loading"
          :finished="finished"
          finished-text="没有更多了"
          @load="onLoad"
        >
          <MyList :list="list"></MyList>
        </van-list>
      </van-tab>
      <van-tab title="总收益率">
        <MyList :list="list"></MyList>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
import MyList from "@/components/List";
export default {
  name: "HOME",
  components: {
    MyList,
  },
  data() {
    return {
      active: 0,
      list: [
        {
          status: "净多1.3倍",
          exchange: "欧易",
          userName: "TraderBeiyang",
          signature: "这才是超短线魅力！",
          accountMoney: 12814,
          monthReturns: 23521,
          monthIncome: 1223,
        },
        {
          status: "净多1.3倍",
          exchange: "欧易",
          userName: "TraderBeiyang",
          signature: "这才是超短线魅力！",
          accountMoney: 12814,
          monthReturns: 23521,
          monthIncome: 1223,
        },
        {
          status: "净多1.3倍",
          exchange: "欧易",
          userName: "TraderBeiyang",
          signature: "这才是超短线魅力！",
          accountMoney: 12814,
          monthReturns: 23521,
          monthIncome: 1223,
        },
        {
          status: "净多1.3倍",
          exchange: "欧易",
          userName: "TraderBeiyang",
          signature: "这才是超短线魅力！",
          accountMoney: 12814,
          monthReturns: 23521,
          monthIncome: 1223,
        },
        {
          status: "净多1.3倍",
          exchange: "欧易",
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
</style>
