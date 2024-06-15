<template>
  <div class="routeDesign">
    <h2 class="text-3xl md:text-5xl font-semibold text-indigo-500 mb-6">My Projects</h2>
    <div class="penjelasan space-y-2">
      <a href="https://neo-kokeshi.vercel.app/#/" target="_blank"
        class="text-blue-400 text-lg md:text-2xl font-medium hover:underline">
        Neo-Kokeshi
      </a>
      <p class="text-gray-300 text-sm md:text-xl leading-relaxed">
        It's a project from school. This project was created by me and my friend. I worked on the backend, developing
        the features for this project.
      </p>
    </div>
    <div class="penjelasan space-y-2">
      <a href="https://uprak-vue.vercel.app/index.html" target="_blank"
        class="text-blue-400 text-lg md:text-2xl font-medium hover:underline">
        Uprak Vue
      </a>
      <p class="text-gray-300 text-sm md:text-xl leading-relaxed">
        A project that made for my practice exam in MPRPL course. This project is not fully responsive, but it utilizes
        local storage.
      </p>
    </div>
    <div class="penjelasan space-y-2">
      <a href="https://github.com/ReyzuaWeh?tab=repositories" target="_blank"
        class="text-blue-400 text-lg md:text-2xl font-medium hover:underline">
        Git Repositories
      </a>
      <p class="text-gray-300 text-sm md:text-xl leading-relaxed">
        I have made several projects in my Git repository. Some of them are public, so you can check them out.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AppProject'
};
</script>

<style scoped>
.penjelasan {
  text-align: justify;
  margin-bottom: 20px;
}

.routeDesign {
  margin: 0%;
  border-radius: 0%;
}
</style>

<style></style>
