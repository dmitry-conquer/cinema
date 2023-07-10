<template>
  <div class="flex flex-col items-center">
    <h1 class="text-2xl font-extrabold text-center lg:text-7xl flex space-x-5 justify-center mb-6">
      <span class="text-transparent bg-gradient-to-br bg-clip-text from-teal-500 via-indigo-500 to-sky-500"
        >Conquer</span
      >
      <span class="text-transparent bg-gradient-to-tr bg-clip-text from-blue-500 via-pink-500 to-red-500">Cinema</span>
      <span class="text-transparent bg-gradient-to-br bg-clip-text from-teal-500 via-indigo-500 to-sky-500">AI</span>
    </h1>
    <p class="text-center text-md max-w-[700px]">
      Ведіть розмову з штучним інтелектом як з реальною людиною! Дізнайтесь все що завгодно про кіноіндрустрію,
      поділіться своїми вподобаннями та підберіть найбілш підходяший фільм під себе. Та ще багато багато іншого!
    </p>
    <TheChat />
    <span class="text-gray-500 text-sm text-right mt-2 block">* Час очікування запиту до 30 с.</span>
  </div>
</template>

<script setup>
definePageMeta({
  middleware: ["auth"],
});
</script>

<style lang="scss"></style>
