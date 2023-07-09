<template>
  <div>
    <h1 class="main-title text-center">Нескінчений потік найкращих фільмів усіх часів</h1>
    <div class="grid grid-cols-[500px] justify-center auto-rows-[400px] space-y-5 w-full">
      <MovieItem
        v-for="movie in movies"
        :key="movie.id"
        :movie="movie"
        class="height-[300px]" />
      <div
        ref="observerTarget"
        class="observer"></div>
    </div>
  </div>
</template>

<script setup>
const observerTarget = ref();
const movies = ref([]);
const page = ref(1);
const list = ref("top_rated");

async function loadMovies() {
  if (movies.value.length % 20 === 0 && movies.value.length > 0) {
    page.value++;
  }
  const res = await $fetch("/api/movies", {
    query: { page: page.value, list: list.value },
  });
  movies.value = [...movies.value, ...res.results];
  console.log(res);
}

const observer = new IntersectionObserver(entries => {
  if (entries[0].isIntersecting) {
    loadMovies();
  }
});
onMounted(() => {
  observer.observe(observerTarget.value);
});
</script>

<style lang="scss"></style>
