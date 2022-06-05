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
        <span class="content-title">Ongoing tasks</span>
        <el-button type="primary" @click.native="Add">Add</el-button>
        <table
          width="100%"
          cellspacing="0"
          cellpadding="0"
          border="0"
          align="center"
        >
          <thead>
            <tr>
              <th>Tasks</th>
              <th>Due Date</th>
              <th>priority</th>
              <th>Headle</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item, index) in tableList" :key="index">
              <td><el-input v-model="item.task"></el-input></td>
              <td>
                <el-date-picker v-model="item.date" type="date">
                </el-date-picker>
              </td>
              <td>
                <el-button type="success">Low</el-button>
                <el-button type="warning">Med</el-button>
                <el-button type="danger">High</el-button>
              </td>
              <td>
                <el-button type="danger" @click.native="Delete(index)"
                  >Delete</el-button
                >
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ongoingTasks",
  props: [],
  components: {},
  data() {
    return {
      tableList: [
        {
          task: "exam",
          date: "2022-05-02",
        },
        {
          task: "test",
          date: "2022-05-10",
        },
        {
          task: "race",
          date: "2022-05-20",
        },
        {
          task: "rest",
          date: "2022-05-30",
        },
      ],
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
    Add() {
      this.tableList.push({ task: "", date: "" });
    },
    Delete(index) {
      this.$confirm("Is delete?", "tips", {
        confirmButtonText: "yes",
        cancelButtonText: "cancel",
        type: "warning",
      })
        .then(() => {
          this.tableList.splice(index, 1);
          this.$message({
            type: "success",
            message: "Delete it!",
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "cancel",
          });
        });
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
    .mainArea {
      width: 85vw;
      height: 75vh;
      background: url(../assets/images/ongoingTasks.jpg) no-repeat center/cover;
      display: flex;
      flex-direction: column;
      align-items: center;
      .content-title {
        font-size: 1.5vw;
        font-weight: bold;
        margin: 2vh 0;
      }
      table {
        font-size: 1vw;
        width: 70vw;
        background: #fff;
        thead {
          display: table;
          word-break: break-all;
          width: 100%;
          tr {
            height: 3vh;
            th {
              text-align: center;
              width: 18vw;
              // border: 1px solid #ccc;
            }
          }
        }
        tbody {
          display: block;
          height: 57vh;
          overflow-y: scroll;
          tr {
            margin: 3vh 0;
            height: 4vh;
            display: table;
            width: 100%;
            td {
              width: 18vw;
              text-align: center;
              word-break: break-all;
              overflow: hidden;
              // border: 1px solid #ccc;
            }
          }
        }
      }
    }
  }
}
</style>