<template>
  <div>
    <div class="space-y-20">
      <BaseSliderSection
        title="Популярні"
        list="popular"
        path="/popular" />
      <BaseSliderSection
        title="Зараз дивляться"
        list="now_playing"
        path="/now-watch" />
      <BaseSliderSection
        title="Найбільший рейтинг"
        list="top_rated"
        path="/top-rate" />
      <BaseSliderSection
        title="Скоро з'являться"
        list="upcoming"
        path="/upcoming" />
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss"></style>
