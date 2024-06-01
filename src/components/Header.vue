<template>
    <header class="bg-gray-800 p-2 text-white shadow-md mx-0 fixed w-full h-fit">
        <div class="mx-auto py-4 flex justify-between items-center">
            <div class="text-2xl font-bold">
                <h1 class="hover:text-gray-300">Vue Web</h1>
            </div>
            <nav>
                <ul class="flex space-x-4">
                    <li><a href="#" class="hover:text-gray-300">About Me</a></li>
                    <li><a href="#" class="hover:text-gray-300">Learned</a></li>
                    <li><a href="#" class="hover:text-gray-300">Contact</a></li>
                </ul>
            </nav>
        </div>
    </header>
</template>

<script>
export default {
    name: 'AppHeader',
}
</script>

<style scoped>
</style>