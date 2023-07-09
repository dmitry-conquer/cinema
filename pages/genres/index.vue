<template>
  <div>
    <h1 class="main-title">Категорії</h1>
    <ul class="grid grid-cols-4 gap-10 auto-rows-[160px]">
      <li
        v-for="genre in GENRES_LIST"
        :key="genre.id"
        class="relative">
        <NuxtLink
          :to="`/genres/${genre.id}`"
          class="block w-full h-full after:content-[''] after:w-full after:h-full after:top-0 after:left-0 after:bg-black/50 after:absolute after:-z-1">
          <img
            :src="`_nuxt/assets/images/${genre.id}.webp`"
            :alt="genre.name"
            class="w-full h-full block object-cover rounded-sm overflow-hidden" />
          <h2 class="absolute z-20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-bold text-2xl">
            {{ genre.name }}
          </h2>
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>

<script setup>
const { GENRES_LIST } = useConstants();


</script>

<style lang="scss"></style>
