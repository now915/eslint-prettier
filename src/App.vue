<template>
  <div>
    <img alt="Vue logo" src="./assets/logo.png" />
    <HelloWorld
      msg="Hello Vue 3 + Vite"
      color1="red"
      color2="red"
      color3="red"
      color4="red"
      color5="red"
      color6="red"
      color7="red"
    />
    <HelloWorldTs msg="Hello Vue 3 + Vite + TS" color="red" />
  </div>
</template>

<script>
  import HelloWorld from './components/HelloWorld.vue'
  import HelloWorldTs from './components/HelloWorldTs.vue'
  export default {
    // setup() {},
    components: {
      HelloWorld,
      HelloWorldTs,
    },
  }
</script>
<style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
