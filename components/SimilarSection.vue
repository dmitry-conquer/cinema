<template>
  <div class="w-[1000px] h-full">
    <h2 class="main-title">{{ title }}</h2>
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
  id: {
    type: [Number, String],
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
});

const { data: movies } = await useFetch("/api/similar", {
  query: {
    id: props.id,
    list: "similar",
  },
  transform: response => {
    return response.results;
  },
});
console.log(movies);
</script>

<style lang="scss"></style>
