<template>
  <AppHeader></AppHeader>
  <AppHome></AppHome>
  <router-view v-slot="{ Component }">
    <transition name="route" class="routeView">
      <component id="route" :is="Component" />
    </transition>
  </router-view>
  <AppContact id="contact"></AppContact>
  <AppScroller></AppScroller>
  <AppFooter></AppFooter>
  <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
</template>

<script>
import AppFooter from './components/Footer.vue';
import AppHeader from './components/Header.vue';
import AppScroller from './components/ScrollBack.vue';
import AppContact from './views/Contact.vue';
import AppHome from './views/Home.vue';

export default {
  name: 'App',
  components: {
    AppHeader,
    AppHome,
    AppFooter,
    AppScroller,
    AppContact
  },
}
</script>

<style>
*{
  font-family: Arial, Helvetica, sans-serif;
}
body{
  background-color: rgb(228, 228, 228);
}
.route-enter-from, .route-leave-to{
  opacity: 0;
  transform: translateY(75%);
}
.route-enter-active, .route-leave-active{
  transition: all 0.3s ease-in-out;
}
.routeView{
  transition: all 0.3s ease-in-out;
}
</style>
