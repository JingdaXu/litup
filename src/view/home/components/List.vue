<template>
  <div class="list-group">
    <!-- LIST -->
    <van-list
      v-model:loading="loading"
      :finished="finished"
      finished-text="没有更多了"
      @load="onLoad"
    >
      <div
        v-for="(item, index) in list"
        :key="index"
        class="list-box"
        @click="clickDetails(item, index)"
      >
        <van-row class="row1">
          <span class="status">{{ item["extra-info"].label1 }}</span>
          <span class="exchange"> {{ item["extra-info"].label2 }} </span>
        </van-row>
        <van-row gutter="20" class="row2">
          <van-col span="4">
            <VanImage
              round
              width="2rem"
              height="2rem"
              :src="item.avatar"
            ></VanImage>
            <!-- src="https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg" -->
          </van-col>
          <van-col span="20">
            <div class="text-left">{{ item.nick_name }}</div>
            <div class="text-left">{{ item.motto }}</div>
          </van-col>
        </van-row>
        <van-row gutter="20" justify="space-between" class="row3">
          <van-col span="8">
            <div class="black">￥{{ item.balance }}</div>
            <div class="text">账户资金</div>
          </van-col>
          <van-col span="8" v-if="type == 'monthly'">
            <div :class="{ red: !isPositive }" class="green">
              {{ numFilter(item["monthly-yield"]) }}%
            </div>
            <div class="text">月收益率</div>
          </van-col>
          <van-col span="8" v-if="type == 'total'">
            <div :class="{ red: !isPositive }" class="green">
              {{ item["total-yield"] * 100 }}%
            </div>
            <div class="text">年收益率</div>
          </van-col>
          <van-col span="8" v-if="type == 'monthly'">
            <div :class="{ red: !isPositive }" class="green">
              ￥{{ item["monthly-yield-in-unit"] }}
            </div>
            <div class="text">月收益额</div>
          </van-col>
          <van-col span="8" v-if="type == 'total'">
            <div :class="{ red: !isPositive }" class="green">
              ￥{{ item["total-yield-in-unit"] }}
            </div>
            <div class="text">年收益额</div>
          </van-col>
        </van-row>
      </div>
    </van-list>
  </div>
</template>

<script>
import { ref } from "vue";
import { useRouter } from "vue-router";
export default {
  name: "MyList",
  props: {
    list: {
      type: Array,
      default() {
        return [];
      },
    },
    type: {
      type: String,
      default: "monthly",
    },
  },
  methods: {
    numFilter(value) {
      const realVal = parseFloat(value * 100).toFixed(2);
      return realVal;
    },
  },
  setup(props) {
    const loading = ref(false);
    const finished = ref(false);
    const isPositive = ref(true);
    const router = useRouter();
    const clickDetails = (item) => {
      console.log(item);
      router.push({ name: "user", query: { userId: item._id } });
    };
    const onLoad = () => {
      setTimeout(() => {
        // 加载状态结束
        loading.value = false;
        // 数据全部加载完成
        if (props.list.length >= 2) {
          finished.value = true;
        }
      }, 1000);
    };

    return {
      loading,
      finished,
      isPositive,
      onLoad,
      clickDetails,
    };
  },
};
</script>

<style lang="less">
@import "@/assets/less/common.less";
@import "@/assets/less/varibles.less";

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
}
</style>