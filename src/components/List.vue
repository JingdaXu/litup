<template>
  <div class="list-group">
    <!-- LIST -->
    <div v-for="(item, index) in list" :key="index" class="list-box">
      <van-row class="row1">
        <span class="status">{{ item.status }}</span>
        <span class="exchange"> {{ item.exchange }} </span>
      </van-row>
      <van-row gutter="20" class="row2">
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
      <van-row gutter="20" justify="space-between" class="row3">
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
  </div>
</template>

<script>
export default {
  name: "MyList",
  props: {
    list: {
      type: Array,
      default(){
        return []
      },
    },
  },
  data() {
    return {
      isPositive: true,
      loading: false,
      finished: true,
    };
  },
};
</script>

<style lang="less">
.list-group {
  .list-box {
    background-color: white;
    padding-top: 10px;
    padding-bottom: 10px;
    margin: 15px 0;
    overflow: hidden;

    .row1 {
      font-size: 14px;
      margin-bottom: 1.5rem;
      span {
        width: 5rem;
        padding: 5px;
      }
      .status {
        background: #ebedf0;
      }
      .exchange {
      }
    }
    .row2 {
      margin-bottom: 10px;
      padding-bottom: 10px;
      border-bottom: 1px solid #ebedf0;
    }
    .row3 {
      margin: 10px 0;
    }
  }
  .list-box:first-child {
    margin-top: 0;
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
}
</style>