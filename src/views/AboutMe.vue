<template>
  <div class="routeDesign">
    <h1 class="text-4xl text-indigo-500 font-bold mb-4">ABOUT ME</h1>
    <div class="penjelasan">
      <div class="flex flex-col md:flex-row items-center mb-6">
        <img src="../assets/dr.ratio.jpg" alt="" class="w-44 h-44 rounded-full mb-4 md:mb-0 md:mr-6">
        <p class="text-lg md:text-xl text-justify text-gray-300">I am Ginanjar Al Farizi, a person that likes puzzles and solving them. Currently, I am a student at SMKN 4 Bandung, specializing in Software Engineering. You may just call me "Gjar" or "Gin" for more simple call.</p>
      </div>
      <div class="my-2">
        <p class="text-2xl text-center text-indigo-300 font-semibold mb-4">Hobbies:</p>
        <div class="flex justify-around">
          <div class="hobby-item">
            <img src="../assets/dr.ratio.jpg" alt="" class="w-32 h-32 rounded-lg mb-2">
            <p class="text-center text-base md:text-lg text-gray-300">Solve Puzzles</p>
          </div>
          <div class="hobby-item">
            <img src="../assets/dr.ratio.jpg" alt="" class="w-32 h-32 rounded-lg mb-2">
            <p class="text-center text-base md:text-lg text-gray-300">Trying Code</p>
          </div>
        </div>
      </div>
      <p class="text-gray-300 mt-11 text-center text-lg md:text-2xl font-semibold italic">"DON'T MAKE IT COMPLICATED, JUST SIMPLIFY"</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AboutMe',
}
</script>

<style scoped>

.penjelasan {
  flex-grow: 1;
}

.hobby-item {
  display: flex;
  flex-direction: column;
  flex: 1;
  justify-content: center;
  align-items: center;
  text-align: center;
}

h1 {
  text-align: center;
}

@media (min-width: 768px) {
  .penjelasan .flex {
    text-align: justify;
  }
}
</style>
