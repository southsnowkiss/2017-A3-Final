<template>
  <div class="container">
    <div class="header">
      <span class="title">Learning Manager</span>
      <div class="navList">
        <div class="navItem" @click="goTo('task')">
          <i class="iconfont icon-liebiao"></i>
          <span>Task List</span>
        </div>
        <div class="navItem" @click="goTo('pedding')">
          <i class="iconfont icon-shijian"></i>
          <span>Pedding</span>
        </div>
        <div class="navItem" @click="goTo('data')">
          <i class="iconfont icon-shuju4"></i>
          <span>Data</span>
        </div>
        <div class="navItem" @click="goTo('user')">
          <i class="iconfont icon-yonghu"></i>
          <span>User</span>
        </div>
      </div>
    </div>
    <div class="main">
      <div class="mainTop">
        <div class="pendingTasks">
          <span
            ><i class="iconfont icon-xiangxia"></i
            ><span>Pending Tasks</span></span
          >
        </div>
        <div class="timeStatistics">
          <span
            ><i class="iconfont icon-zhexiantu"></i
            ><span>Time statistics</span></span
          >
        </div>
      </div>
      <div class="mainBottom">
        <div class="timeControl">
          <span
            ><i class="iconfont icon-houtaishangpinguanli"></i
            ><span>Time control</span></span
          >
        </div>
        <div class="add">
          <span><i class="iconfont icon-tianjia"></i><span>Add</span></span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "pedding",
  props: [],
  components: {},
  data() {
    return {};
  },
  //方法 函数写这里
  methods: {
    goTo(type) {
      if (type == "task") {
        this.$router.push({ path: "/" });
      }
      if (type == "pedding") {
        this.$router.push({ path: "/pedding" });
      }
      if (type == "data") {
        this.$router.push({ path: "/data" });
      }
      if (type == "user") {
        this.$router.push({ path: "/user" });
      }
    },
  },
  //计算属性
  computed: {},
  //侦听器
  watch: {},
  //过滤器
  filters: {},
  //以下是生命周期
  //组件创建之前
  beforeCreate() {},
  //组件创建之后
  created() {},
  //页面渲染之前
  beforeMount() {},
  //页面渲染之后
  mounted() {},
  //页面视图数据更新之前
  beforeUpdate() {},
  //页面视图数据更新之后
  updated() {},
  //页面销毁之前
  beforeDestroy() {},
  //页面销毁之后
  destroyed() {},
};
</script>

<style lang="less" scoped>
.container {
  display: flex;
  flex-direction: column;
  height: 100vh;
  .header {
    background: url(../assets/images/headerbg.jpg) no-repeat center -27vh / cover;
    // background: pink;
    color: #333;
    text-align: center;
    height: 12vh;
    display: flex;
    justify-content: space-around;
    align-items: center;
    .title {
      font-size: 2vw;
    }
    .navList {
      width: 30vw;
      display: flex;
      justify-content: space-between;
      .navItem {
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
        i {
          font-size: 3vw;
        }
        span {
          font-size: 1vw;
        }
      }
    }
  }
  .main {
    flex: 1;
    // background: pink;
    background-image: linear-gradient(to bottom, #a19595, #715657, #553132);
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    .mainTop,.mainBottom {
      display: flex;
      justify-content: space-around;
      width: 100%;
      div{
        width: 30vw;
        height: 30vh;
        background: #fff;
        text-align: center;
        line-height: 30vh;
        border-radius: 2vw;
        font-size: 1.5vw;
        i{
          font-size: 1.5vw;
        }
      }
    }
  }
}
</style>