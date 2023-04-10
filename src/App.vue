<script setup>
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <!-- <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
  </div>
  <HelloWorld msg="Vite + Vue" /> -->
  <!-- <h1 class="text-3xl font-bold underline">
    Hello world!
  </h1> -->


	

<div class=" bg-gray-200 dark:bg-gray-900 flex flex-wrap items-center justify-center">
  <div class="container max-w-lg bg-white rounded dark:bg-gray-800 shadow-lg transform duration-200 easy-in-out m-12">
    <div class="h-2/4 sm:h-64 overflow-hidden">
      <img class="w-full rounded-t"
        src="https://lh3.googleusercontent.com/p/AF1QipPVtYFdkr1aXZCmiCxk5Csz4d07WIiqt9T9c9GS=s1360-w1360-h1020" />
    </div>
    <div class="flex justify-center px-5 -mt-12 mb-4">
      <span clspanss="block relative h-120 w-120" >
        <img alt=" "
          src="src/assets/img/GraduationPic.jpg"
          class=" object-cover rounded-full h-40 w-40 bg-white p-1" />
      </span>
    </div>
    <div class="">
      <div class="px-7 mb-8">
        <h2 class="text-3xl font-bold text-blue-700 dark:text-gray-300">Amalul Baharin</h2>
        <p class="italic text-gray-400 mt-2 dark:text-gray-400">Wed Development Student</p>
        <p class="mt-2 text-gray-600 dark:text-gray-300"> Level 5 Diploma in Web Development in Politeknik Brunei.</p>
        <p class="mt-2 text-gray-600 dark:text-gray-300"> 21FTT1854</p>
        <div
          class="justify-center px-4 py-2 cursor-pointer bg-blue-700  max-w-min mx-auto mt-8 rounded-lg text-gray-300 hover:bg-black hover:text-gray-100 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-gray-200">
          <span class="flex items-center space-x-2">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" aria-label="Email address" class="w-4 h-4">
					<path fill="currentColor" d="M274.6,25.623a32.006,32.006,0,0,0-37.2,0L16,183.766V496H496V183.766ZM464,402.693,339.97,322.96,464,226.492ZM256,51.662,454.429,193.4,311.434,304.615,256,268.979l-55.434,35.636L57.571,193.4ZM48,226.492,172.03,322.96,48,402.693ZM464,464H48V440.735L256,307.021,464,440.735Z"></path>
				</svg>
        <span class="dark:text-gray-400">21FTT1854@student.pb.edu.bn</span>
      </span>
        </div>
        <div class="flex flex-wrap justify-center gap-2 sm:gap-4 mt-8"></div>
      </div>
    </div>
  </div>
</div>


</template>


<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
