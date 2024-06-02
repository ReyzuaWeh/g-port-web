<template>
    <header class="bg-gray-800 p-2 top-0 text-white shadow-md mx-0 fixed w-full h-fit">
        <div class="mx-auto py-4 flex justify-between items-center">
            <div class="text-2xl font-bold">
                <h1 class="hover:text-gray-300 cursor-default">Vue Web</h1>
            </div>
            <nav>
                <ul class="flex space-x-4">
                    <li><router-link @click="scrollToRoute" to="/" class="hover:text-gray-300">About Me</router-link></li>
                    <li><router-link @click="scrollToRoute" to="/learned" class="hover:text-gray-300">Learned</router-link></li>
                    <li><a href="#" class="hover:text-gray-300">Contact</a></li>
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