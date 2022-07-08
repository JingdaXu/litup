<template>
  <div class="module">
    <div class="title">收益走势</div>
  </div>
</template>

<script>
export default {
  name: "MyProfit",
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
}
</style>