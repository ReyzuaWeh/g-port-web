<template>
    <header class="bg-gray-800 p-2 px-1 top-0 text-white shadow-md mx-0 fixed w-full h-fit">
        <div class="mx-auto py-4 flex justify-between items-center">
            <div class="text-3xl font-bold">
                <div class="cursor-default flex items-center">
                    <img src="../assets/pi.png" class="md:max-w-10 max-w-7">
                    <h1 class="hover:text-gray-300 text-xl md:text-3xl transition-all duration-400">Portfolio</h1>
                </div>
            </div>
            <nav>
                <ul class="flex space-x-4 text-xs md:text-lg">
                    <li><router-link @click="scrollToRoute" to="/" class="hover:text-gray-300 transition-all duration-400">About Me</router-link></li>
                    <li><router-link @click="scrollToRoute" to="/learned" class="hover:text-gray-300 transition-all duration-400">Learned</router-link></li>
                    <li><a @click="scrollTo('#projects')" class="hover:text-gray-300 cursor-pointer transition-all duration-400">Projects</a></li>
                    <li><a @click="scrollTo('#contact')" class="hover:text-gray-300 cursor-pointer transition-all duration-400">Contact</a></li>
                </ul>
            </nav>
        </div>
    </header>
</template>

<script>
import methods from '../code/instance';
export default {
    name: 'AppHeader',
    mixins : [methods]
}
</script>

<style scoped>
</style>