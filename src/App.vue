<template>
  <AppHeader></AppHeader>
  <AppHome></AppHome>
  <router-view v-slot="{ Component }">
    <transition>
      <component :is="Component" name="route" id="route"/>
    </transition>
  </router-view>
  <AppFooter></AppFooter>
  <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import AppFooter from './components/Footer.vue';
import AppHeader from './components/Header.vue';
import AppHome from './views/Home.vue';
// import InputItem from './components/InputItem.vue';
// import CekData from './components/cekData.vue';

export default {
  name: 'App',
  components: {
    // HelloWorld,
    // InputItem,
    // CekData,
    AppHeader,
    AppHome,
    AppFooter
  }
}
</script>

<style>
*{
  font-family: Arial, Helvetica, sans-serif;
}
.route-enter-from{
  opacity: 0;
}
.route-enter-active{
  transition: all 0.3s ease-out;
}
.route-leave-to{
  opacity: 0;
}
.route-leave-active{
  transition: all 0.3s ease-out;
}
</style>
