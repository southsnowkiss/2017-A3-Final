<template>
  <div class="container">
    <div class="header">
      <span class="title">Learning Manager</span>
      <div class="navList">
        <div class="navItem">
          <i class="iconfont icon-liebiao"></i>
          <span>Task List</span>
        </div>
        <div class="navItem">
          <i class="iconfont icon-shijian"></i>
          <span>Pedding</span>
        </div>
        <div class="navItem">
          <i class="iconfont icon-shuju4"></i>
          <span>Data</span>
        </div>
        <div class="navItem">
          <i class="iconfont icon-yonghu"></i>
          <span>User</span>
        </div>
      </div>
    </div>
    <div class="main">
      <div class="table">
        <span class="content-title">Already done</span>
        <table
          width="100%"
          cellspacing="0"
          cellpadding="0"
          border="0"
          align="center"
        >
          <thead>
            <tr>
              <th>Task List</th>
              <th>Due Date</th>
              <th>Time</th>
              <th>Completion</th>
              <th>Degree</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item, index) in tableList" :key="index">
              <td>{{ item.issue }}</td>
              <td>{{ item.date }}</td>
              <td>{{ item.time }}</td>
              <td>{{ item.completion }}</td>
              <td>{{ item.degree }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "alreadyDone",
  props: [],
  components: {},
  data() {
    return {
      tableList: [
        {
          issue: "111",
          date: "22/03/01",
          time: "1min",
          completion: "failed",
          degree: "HD",
        },
      ],
    };
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
    .table {
      width: 85vw;
      height: 75vh;
      background: url(../assets/images/alreadyDone.jpg) no-repeat center/cover;
      display: flex;
      flex-direction: column;
      .content-title {
        font-size: 1.5vw;
        font-weight: bold;
        margin: 5vh;
      }
      table {
        font-size: 1vw;
        thead {
          display: table;
          word-break: break-all;
          width: 100%;
          tr {
            height: 4vh;
            th {
              text-align: center;
              width: 18vw;
            }
          }
        }
        tbody {
          display: block;
          height: 57vh;
          overflow-y: scroll;
          tr {
            height: 4vh;
            display: table;
            width: 100%;
            td {
              width: 18vw;
              text-align: center;
              word-break: break-all;
              overflow: hidden;
            }
          }
        }
      }
    }
  }
}
</style>