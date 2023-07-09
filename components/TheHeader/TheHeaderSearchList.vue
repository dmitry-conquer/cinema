<template>
  <ul class="flex flex-col space-y-5 absolute top-full right-0 bg-primary-light p-6 w-[400px]">
    <li
      class="flex gap-3"
      v-for="movie in movies"
      :key="movie.id">
      <NuxtLink
        :to="`/movie_${movie.id}`"
        @click="emit('clear-search')"
        class="truncate"
        >{{ movie.title }} ({{ getYear(movie.release_date) }})
      </NuxtLink>
      <span
        class="p-1 px-2 text-sm rounded-lg"
        :class="dynamicRate(movie.vote_average)"
        >{{ movie.vote_average.toFixed(1) }}</span
      >
    </li>
  </ul>
</template>

<script setup>
defineProps({
  movies: {
    type: Array,
    required: false,
  },
});

const emit = defineEmits({
  "clear-search": null,
});

const dynamicRate = vote => {
  return vote >= 7 ? "bg-green-700" : vote >= 4 ? "bg-yellow-500/80" : "bg-red-900";
};
</script>

<style lang="scss">
.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
}
.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
</style>
