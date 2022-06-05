<template>
  <div class="container">
    <div class="header">
      <span class="title">Learning Manager</span>
      <div class="navList">
        <div class="navItem">
          <i class="iconfont icon-liebiao"></i>
          <span>11</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
  props: [],
  components: {},
  data() {
    return {};
  },
  //方法 函数写这里
  methods: {},
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
  //   height: 100vh;
  .header {
    // background: url(../assets/images/headerbg.jpg) no-repeat center 0vh/cover;
    background: pink;
    color: #333;
    text-align: center;
    height: 15vh;
    // line-height: 15vh;
    display: flex;
    justify-content: space-between;
  }
  .title {
    margin-left: 5vw;
    font-size: 3vh;
    font-weight: bolder;
  }
  .navList,
  .choosenNavItem {
    display: flex;
    height: 15vh;
    .navItem {
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      width: 10vh;
      height: 15vh;
      line-height: 0;
      text-align: center;
      margin: 0 2vh;
      img {
        display: inline-block;
        width: 100%;
        height: 8vh;
      }
    }
  }
}
</style>