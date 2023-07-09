<template>
  <header class="container mx-auto flex justify-between items-center py-4 w-full relative z-50">
    <TheHeaderLogo />
    <BaseSearch v-model:search="search" />
    <TheHeaderSearchList
      v-if="search"
      :movies="movies"
      @clear-search="search = ''" />
  </header>
</template>

<script setup>
const search = ref("");
const { MOVIES_ITEMS_IN_SEARCH } = useConstants();

const { data: movies } = await useLazyFetch("/api/movies/search", {
  query: { search },
  transform: response => {
    const result = response.results;
    return result.splice(0, MOVIES_ITEMS_IN_SEARCH);
  },
});
</script>

<style lang="scss"></style>
