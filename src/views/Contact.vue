<template>
  <div class="bg-gray-100 min-h-screen flex items-center justify-center">
    <div class="bg-slate-50 p-8 rounded-md shadow-lg max-w-md w-full">
      <h2 class="text-3xl font-bold mb-6 text-gray-800">Contact Me</h2>

      <div class="mb-4">
        <label for="name" class="block text-sm md:text-base font-medium text-gray-700 mb-2">Your Name</label>
        <input type="text" id="name" name="name" placeholder="Enter your name"
          class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 text-sm md:text-base">
      </div>

      <div class="mb-4">
        <label for="email" class="block text-sm md:text-base font-medium text-gray-700 mb-2">Your Email</label>
        <input type="email" id="email" name="email" placeholder="Enter your email"
          class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 text-sm md:text-base">
      </div>

      <div class="mb-6">
        <label for="message" class="block text-sm md:text-base font-medium text-gray-700 mb-2">Your Message</label>
        <textarea id="message" name="message" rows="4" placeholder="Enter your message"
          class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none resize-none focus:ring-indigo-500 focus:border-indigo-500 text-sm md:text-base"></textarea>
      </div>
      <button type="submit" class="w-full bg-indigo-500 text-slate-50 py-2 px-4 rounded-md hover:bg-indigo-600 transition duration-300 ease-in-out">
        Submit
      </button>
      <p class="warn">*Cannot send an e-mail for now</p>
    </div>
  </div>
</template>

<script>
export default {
  name : 'AppContact'
};
</script>

<style scoped>
p.warn{
  text-align: end;
  font-size: 10px;
  color: tomato;
}
@media (min-width: 768px) {
  p.warn {
      font-size: 12px;
      line-height: 16px;
  }
}
</style>
