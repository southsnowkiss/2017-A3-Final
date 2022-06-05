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
        <span class="content-title">Music player</span>
        <div class="music">
          <img src="../assets/images/music.png" alt="" />
          <audio v-for="(item, index) in music" :key="index" class="audio">
            <source :src="require('@/assets/music/' + item.path)" />
          </audio>
          <!-- <audio id="play2">
            <source src="../assets/music/Imagine Dragons - Demons.mp3" />
          </audio>
          <audio id="play3">
            <source src="../assets/music/Taylor Swift - Enchanted.mp3" />
          </audio> -->
          <div class="btn">
            <i
              class="iconfont icon-tuiguangzhong"
              id="start"
              @click="start()"
              :style="isPlay ? 'display:none' : 'display:block'"
            ></i>
            <i
              class="iconfont icon-tingzhi"
              @click="stop()"
              :style="isPlay ? 'display:block' : 'display:none'"
            ></i>
            <i class="iconfont icon-shangyishou_huaban" @click="reduce()"></i>
            <i class="iconfont icon-xiayishou_huaban" @click="add()"></i>
          </div>
          <div class="sound">
            <i class="iconfont icon-shengyin"></i>
            <input
              type="range"
              min="0"
              max="1"
              step="0.01"
              v-model="voiceValue"
              @click="myVolume"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "musicPlayer",
  props: [],
  components: {},
  data() {
    return {
      music: [
        {
          path: "DJ SnakeJustin Bieber - Let Me Love You.mp3",
        },
        {
          path: "Imagine Dragons - Demons.mp3",
        },
        {
          path: "Taylor Swift - Enchanted.mp3",
        },
      ],
      isPlay: false,
      audio: document.getElementsByClassName("audio"),
      index: 0,
      voiceValue: 0.5,
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
    start() {
      this.isPlay = true;
      this.audio[this.index].currentTime = 0;
      this.audio[this.index].play();
    },
    stop() {
      this.isPlay = false;
      this.audio[this.index].pause();
    },
    reduce() {
      //上一首歌
      this.stop();
      this.index--;
      if (this.index == -1) {
        this.index = this.audio.length - 1;
      }
      this.start();
    },
    add() {
      //下一首歌
      this.stop();
      this.index++;
      if (this.index > this.audio.length - 1) {
        this.index = 0;
      }
      this.start();
    },
    myVolume() {
      //调节声音
      this.audio[this.index].volume = this.voiceValue;
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
      background: url(../assets/images/musicPlayer.jpg) no-repeat center/cover;
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      .content-title {
        font-size: 1.5vw;
        font-weight: bold;
        margin: 5vh;
      }
      .music {
        width: 35vw;
        height: 55vh;
        margin: 5vh;
        text-align: center;
        font-size: 3vw;
        background: white;
        // display: flex;
        // flex-direction: column;
      }
      .btn {
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        width: 100%;
        margin: 5vh 0;
        i {
          font-size: 2vw;
        }
        span {
          font-size: 1.1vw;
        }
      }
      .sound {
        margin: 5vh 0;
      }
    }
  }
}
</style>