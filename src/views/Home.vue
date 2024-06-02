<template>
    <div class="bg-gray-100 min-h-screen flex items-center justify-center">
        <div class="p-6 max-w-xl mx-auto bg-slate-50 rounded-xl shadow-lg space-y-4">
            <h1 class="text-3xl md:text-4xl font-semibold text-gray-800">Welcome to My Portfolio</h1>
            <p class="text-gray-600 md:text-lg leading-relaxed">
                Hi there! I made this simple website to explain about myself and testing some of my programming skills.
            </p>
            <div class="flex justify-between items-end">
                <img src="../assets/dr.ratio.jpg" alt="" class="rounded-lg w-24 h-full">
                <router-link to="/" class="text-blue-500 h-fit font-medium hover:underline">
                    <span>View Projects</span>
                </router-link>
            </div>
            <div class="w-full flex justify-center">
                <button @click="scrollToRoute">
                    <i class="bi bi-caret-down-fill" ></i>
                </button>
            </div>
        </div>
    </div>
</template>

<script>
import methods from '../code/instance';
export default {
    name: 'AppHome',
    mixins : [methods]
};
</script>

<style scoped>
</style>