<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">11</router-link> |
      <router-link to="/musicPlayer">22</router-link>
    </div> -->
    <router-view />
  </div>
</template>
<script>
export default {
  name: "app",
};
</script>
<style lang="less">
body,
html {
  margin: 0;
  padding: 0;
}
</style>
