<template>
  <div class="flex flex-col items-center text-center">
    <h1 class="main-title text-center">Рандомайзер фільмів</h1>
    <p class="text-center text-xl mb-10">Обери випадковий фільм з тисячі найпопулярніших кінокартин.</p>
    <div v-if="firstSearch" class="flex flex-col items-center max-w-xl">
      <NuxtLink
        :to="`/movie_${randomMovie.id}`"
        class="">
        <img
          v-if="randomMovie.id"
          :src="`https://image.tmdb.org/t/p/w780${randomMovie.backdrop_path}`"
          :alt="randomMovie.title"
          class="w-full max-w-lg h-[280px] object-cover" />
      </NuxtLink>
      <h2 class="">
        <NuxtLink
          :to="`/movie_${randomMovie.id}`"
          class="mt-9 mb-4 block text-2xl font-bold text-yellow-300"
          >{{ randomMovie.title }} ({{ getYear(randomMovie.release_date) }})</NuxtLink
        >
      </h2>
      <p class="">{{ randomMovie.overview }}</p>
    </div>
    <button
      @click="getRandomMovie"
      class="px-3 py-2 rounded-lg bg-secondary group mt-4">
      <IconRandom class="text-white w-8 h-8 group-hover:animate-bounce" />
    </button>
  </div>
</template>

<script setup>
const randomMovie = ref({});
const firstSearch = ref(false);

const { data: movie, refresh } = await useFetch("/api/random", {
  transform: response => {
    const movies = response.results;
    return movies[random(20)];
  },
});

const getRandomMovie = () => {
  refresh();
  randomMovie.value = movie.value;
  firstSearch.value = true;
};
</script>
