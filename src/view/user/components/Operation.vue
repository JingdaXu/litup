<template>
  <div class="module">
    <div class="title">最新操作</div>
    <van-steps direction="vertical" :active="0">
      <van-step class="text-left">
        <p>
          【啊皮量化】的实盘账户在【OKX】以单价【112.38】买入开多BCH-USDT永续合约，挂单【5张】，成交5张
        </p>
        <p>2016-07-12 12:40</p>
      </van-step>
      <van-step class="text-left">
        <p>
          【啊皮量化】的实盘账户在【OKX】以单价【112.38】买入开多BCH-USDT永续合约，挂单【5张】，成交5张
        </p>
        <p>2016-07-11 10:00</p>
      </van-step>
      <van-step class="text-left">
        <p>
          【啊皮量化】的实盘账户在【OKX】以单价【112.38】买入开多BCH-USDT永续合约，挂单【5张】，成交5张
        </p>
        <p>2016-07-10 09:30</p>
      </van-step>
    </van-steps>
  </div>
</template>

<script>
export default {
  name: "MyOperation",
};
</script>

<style lang="less">
@import "@/assets/less/common.less";
@import "@/assets/less/varibles.less";

.title {
  padding: 15px;
  text-align: left;
  border-bottom: 1px solid @grey;
}
</style>