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
          <MyList></MyList>
        </van-list>
      </van-tab>
      <van-tab title="总收益率"> </van-tab>
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
      active: 1,
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
