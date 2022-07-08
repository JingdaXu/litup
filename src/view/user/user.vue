<template>
  <van-row gutter="20" class="box1">
    <van-col span="4">
      <VanImage
        round
        width="4rem"
        height="4rem"
        src="https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg"
      ></VanImage>
    </van-col>
    <van-col span="20">
      <div class="user-name">
        <span>{{ userName }}</span>
        <span><van-icon name="like-o" />{{ likeNumber }}</span>
      </div>
    </van-col>
  </van-row>

  <!-- TAB -->
  <van-tabs v-model:active="active" color="#1989fa">
    <van-tab title="主页"> </van-tab>
    <van-tab title="持仓"> </van-tab>
    <van-tab title="观点"> </van-tab>
  </van-tabs>
</template>

<script>
export default {
  name: "MyUser",
  components: {
    // Account,
  },
  data() {
    return {
      userName: "啊皮量化",
      active: 0,
      likeNumber: 0,
    };
  },
};
</script>

<style lang="less">
.box1 {
  padding: 15px;
  background-color: #fff;
  margin-bottom: 5px;
  .user-name {
    text-align: left;
    margin-left: 10px;
    span {
      display: inline-block;
      margin-left: 10px;
    }
  }
}
</style>
