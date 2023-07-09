<template>
  <div>
    <h1 class="main-title">{{ title }}</h1>
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
const { GENRES_LIST } = useConstants();
const router = useRouter();
const route = useRoute();

const page = computed(() => +route.query.page || 1);
const genre = computed(() => route.params.genre);
const title = GENRES_LIST.find(genre => genre.id == route.params.genre).name;

const { data: movies } = await useFetch(`/api/movies/genres`, {
  initialCache: false,
  query: { page, genre },
  transform: response => {
    return response.results;
  },
  watch: [page, genre],
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
