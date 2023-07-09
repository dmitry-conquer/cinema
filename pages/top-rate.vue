<template>
  <div>
    <h1 class="main-title">Найбільший рейтинг</h1>
    <div class="grid grid-cols-4 gap-10 auto-rows-[320px]">
      <MovieItem
        v-for="movie in movies"
        :key="movie.id"
        :movie="movie" />
    </div>
    <BasePagination
      :page="+route.query.page || 1"
      @change-page="changePage" />
  </div>
</template>

<script setup>
const router = useRouter();
const route = useRoute();

const page = computed(() => +route.query.page || 1);
const list = ref("top_rated");

const { data: movies } = await useFetch(`/api/movies`, {
  initialCache: false,
  query: { page, list },
  transform: response => {
    return response.results;
  },
  watch: [page],
});

const changePage = value => {
  router.push({
    query: {
      page: value,
    },
  });
  window.scrollTo({ top: 0 });
};
</script>
