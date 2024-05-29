<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
  <InputItem></InputItem>
  <CekData></CekData>
  <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import InputItem from './components/InputItem.vue'
import CekData from './components/cekData.vue'

export default {
  name: 'App',
  components: {
    // HelloWorld,
    InputItem,
    CekData
  }
}
</script>

<style>
*{
  font-family: Arial, Helvetica, sans-serif;
}
</style>
