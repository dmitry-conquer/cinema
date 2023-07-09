<template>
  <article class="flex flex-col items-start space-y-20">
    <div class="flex justify-start gap-12">
      <img
        :src="`https://image.tmdb.org/t/p/w780${movie.backdrop_path}`"
        :alt="movie.original_title"
        class="w-1/3 rounded-lg object-cover overflow-hidden" />
      <div class="px-4 w-1/2">
        <p class="mb-1">{{ movie.original_title }}</p>
        <h1 class="main-title mb-1">{{ movie.title }} ({{ getYear(movie.release_date) }})</h1>
        <p class="text-slate-400/90">{{ genresNormalize(movie.genres) }}</p>
        <div class="mt-4">
          <dl class="space-y-4">
            <div>
              <dt class="text-2xl mb-2 font-bold">Бюджет</dt>
              <dd>${{ movie.budget }}</dd>
            </div>
            <div>
              <dt class="text-2xl mb-2 font-bold">Опис</dt>
              <dd>{{ movie.overview }}</dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
    <div class="w-[1000px] h-full">
      <h2 class="main-title">Зображення</h2>
      <Swiper
        :modules="[SwiperAutoplay, SwiperEffectCoverflow]"
        :slides-per-view="3"
        :space-between="10"
        :effect="'coverflow'"
        :speed="1200"
        :autoplay="{
          delay: 2000,
        }"
        class="w-full h-[240px]">
        <SwiperSlide
          v-for="image in images"
          :key="image.file_path"
          class="h-full">
          <img
            :src="`https://image.tmdb.org/t/p/w780${image.file_path}`"
            alt="backdrop"
            class="w-full h-full object-cover" />
        </SwiperSlide>
      </Swiper>
    </div>
    <SimilarSection
      :id="route.params.id"
      title="Схожі фільми" />
  </article>
</template>

<script setup>
const route = useRoute();

const { data: movie } = await useFetch(`/api/movies/${route.params.id}`);
const { data: images } = await useFetch("/api/images/", {
  query: {
    id: route.params.id,
  },
  transform: response => {
    return response.backdrops;
  },
});
</script>

<style lang="scss"></style>
