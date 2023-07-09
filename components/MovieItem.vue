<template>
  <article class="h-full">
    <NuxtLink
      :to="`/movie_${movie.id}`"
      class="flex flex-col relative h-full p-3 rounded-xl overflow-hidden">
      <img
        :src="pathURL"
        :alt="movie.original_title"
        class="block w-full h-full absolute left-0 top-0 object-cover z-[-1]" />
      <span class="py-2 px-3 rounded-lg bg-secondary self-start">{{ movie.vote_average.toFixed(1) }}</span>
      <div class="bg-primary/70 p-2 rounded-xl mt-auto">
        <p class="truncate">{{ movie.original_title }}</p>
        <h2 class="text-2xl font-bold text-secondary mb-2 leading-6">{{ movie.title }}</h2>
        <p>{{ getYear(movie.release_date) }}</p>
      </div>
    </NuxtLink>
  </article>
</template>

<script setup>
const props = defineProps({
  movie: {
    type: Object,
    required: true,
  },
});

const pathURL = computed(() => {
  return props.movie.backdrop_path
    ? `https://image.tmdb.org/t/p/w780${props.movie.backdrop_path}`
    : `https://innovating.capital/wp-content/uploads/2021/05/placeholder-image-dark.jpg`;
});
</script>

<style lang="scss"></style>
