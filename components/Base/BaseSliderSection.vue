<template>
  <div class="w-[1000px] h-full">
    <h2 class="text-4xl font-bold mb-5 block text-secondary">
      <NuxtLink :to="path">{{ title }}</NuxtLink>
    </h2>
    <Swiper
      :slides-per-view="4"
      :space-between="25"
      :speed="1200"
      class="w-full h-[320px]">
      <SwiperSlide
        v-for="movie in movies"
        :key="movie.id"
        class="h-full">
        <MovieItem :movie="movie" />
      </SwiperSlide>
    </Swiper>
  </div>
</template>

<script setup>
const props = defineProps({
  list: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  path: {
    type: String,
    required: true,
  },
});

const page = ref(1);

const { data: movies } = await useFetch("/api/movies", {
  query: { list: props.list, page },
  transform: response => {
    return response.results;
  },
});
</script>

<style lang="scss"></style>
