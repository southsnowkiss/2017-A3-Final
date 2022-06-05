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
      <div class="mainArea">
        <span class="content-title">Timer</span>
        <div class="btn">
          <div class="start" @click="start">
            <i class="iconfont icon-tuiguangzhong"></i>
            <span>Start</span>
          </div>
          <div class="stop" @click="stop">
            <i class="iconfont icon-tingzhi"></i>
            <span>Stop</span>
          </div>
          <div class="reset" @click="reset">
            <i class="iconfont icon-zhongzhi"></i>
            <span>Reset</span>
          </div>
          <div class="pomodoro" @click="pomodoro">
            <i class="iconfont icon-beifendingshiqi-02"></i>
            <span>Pomodoro</span>
          </div>
          <div class="set">
            <i class="iconfont icon-shezhi-xianxing"></i>
            <span>Set</span>
          </div>
        </div>
        <div class="time">
          <div ref="Timer">00:00:00</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "timer",
  props: [],
  components: {},
  data() {
    return {
      timer: "",
      hour: 0,
      minutes: 0,
      seconds: 0,
      cr: "",
    };
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
    startTimer() {
      this.seconds += 1;
      if (this.seconds >= 60) {
        this.seconds = 0;
        this.minutes = this.minutes + 1;
      }

      if (this.minutes >= 60) {
        this.minutes = 0;
        this.hour = this.hour + 1;
      }
      this.$refs.Timer.innerHTML =
        (this.hour < 10 ? "0" + this.hour : this.hour) +
        ":" +
        (this.minutes < 10 ? "0" + this.minutes : this.minutes) +
        ":" +
        (this.seconds < 10 ? "0" + this.seconds : this.seconds);
      this.cr = this.seconds;
    },
    //开始
    start() {
      this.timer = setInterval(this.startTimer, 1000);
    },
    //停止
    stop() {
      clearInterval(this.timer);
    },
    //重置
    reset() {
      clearInterval(this.timer);
      this.hour = 0;
      this.minutes = 0;
      this.seconds = 0;
      this.cr = "";
      this.$refs.Timer.innerHTML =
        "0" + this.hour + ":" + "0" + this.minutes + ":" + "0" + this.seconds;
    },
    //番茄钟
    pomodoro() {},
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
    justify-content: center;
    align-items: center;
    .mainArea {
      width: 85vw;
      height: 75vh;
      background: url(../assets/images/timer.jpg) no-repeat center/cover;
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      .content-title {
        font-size: 1.5vw;
        font-weight: bold;
        margin: 5vh;
      }
      .btn {
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        width: 50vw;
        margin: 5vh;
        div {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          align-items: center;
          i {
            font-size: 2vw;
          }
          span {
            font-size: 1.1vw;
          }
        }
      }
      .time {
        width: 50vw;
        height: 20vh;
        margin: 5vh;
        text-align: center;
        line-height: 20vh;
        font-size: 3vw;
      }
    }
  }
}
</style>