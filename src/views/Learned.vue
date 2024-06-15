<template>
  <div class="routeDesign bg-gray-800 p-6 rounded-lg shadow-lg">
    <h1 class="text-4xl font-bold text-indigo-500 mb-6">WHAT I'VE LEARNED</h1>
    <div class="grid grid-cols-2 md:grid-cols-4 gap-6">
      <div class="bagian">
        <img src="../assets/logo.png" alt="" class="learned">
        <p class="text-gray-300">Vue.js</p>
      </div>
      <div class="bagian">
        <img src="../assets/mysql.png" alt="" class="learned">
        <p class="text-gray-300">Database (MySQL)</p>
      </div>
      <div class="bagian">
        <img src="../assets/html.png" alt="" class="learned">
        <p class="text-gray-300">HTML</p>
      </div>
      <div class="bagian">
        <img src="../assets/css.png" alt="" class="learned">
        <p class="text-gray-300">CSS</p>
      </div>
      <div class="bagian">
        <img src="../assets/js.png" alt="" class="learned">
        <p class="text-gray-300">Java Script</p>
      </div>
      <div class="bagian">
        <img src="../assets/tailwind.png" alt="" class="learned">
        <p class="text-gray-300">Tailwind CSS</p>
      </div>
      <div class="bagian">
        <img src="../assets/bootstrap.png" alt="" class="learned">
        <p class="text-gray-300">Bootstrap</p>
      </div>
      <div class="bagian">
        <img src="../assets/laravel.png" alt="" class="learned">
        <p class="text-gray-300">Laravel</p>
      </div>
      <div class="bagian">
        <img src="../assets/native.png" alt="" class="learned">
        <p class="text-gray-300">Native PHP</p>
      </div>
      <div class="bagian">
        <img src="../assets/git.png" alt="" class="learned">
        <p class="text-gray-300">Git</p>
      </div>
      <div class="bagian">
        <img src="../assets/unity.png" alt="" class="learned">
        <p class="text-gray-300">Unity</p>
      </div>
      <div class="bagian">
        <img src="../assets/java.jpg" alt="" class="learned">
        <p class="text-gray-300">Java (J2SE)</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AppLearned',
}
</script>

<style scoped>
.bagian {
  text-align: center;
}

img.learned {
  width: 5rem;
  height: 5rem;
  margin: 0 auto;
  margin-bottom: 2;
  border-radius: 4px;
}
</style>
