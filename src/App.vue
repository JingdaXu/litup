<template>
  <!-- 路由跳转页 -->
  <van-nav-bar
    left-text=""
    left-arrow
    @click-left="onClickLeft"
  />
  <router-view />
  <!-- 底部选项 -->
  <!-- <van-tabbar route>
    <van-tabbar-item icon="home-o" replace to="/home">首页</van-tabbar-item>
    <van-tabbar-item icon="friends-o" replace to="/user">用户</van-tabbar-item>
  </van-tabbar> -->
</template>

<script>
import { useRouter } from "vue-router";

export default {
  name: "App",
  components: {},
  setup() {
    const router = useRouter();
    const onClickLeft = () => {
      router.go(-1);
    };

    return {
      onClickLeft,
    };
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  padding-top: 0px;
  background: #f2f3f5;
  height: 100vh;
}
</style>
