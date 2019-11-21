<template>
  <div id="app">
    <aia-button @click="sub" size="small" type="success">提交22</aia-button>
  </div>
</template>

<script>
// import HelloWorld from "./components/HelloWorld.vue";
// import { AiaButton, Item } from "aia-element-ui";
// import { AiaButton, Item } from "./components/index";

export default {
  name: "app",
  // components: {
  //   // HelloWorld
  //   AiaButton: AiaButton,
  //   Item: Item
  // },
  methods: {
    sub() {
      console.log(12312);
    }
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
