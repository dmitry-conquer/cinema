<template>
  <div class="bg-primary-light flex gap-3 items-center px-3 py-2 rounded">
    <span>
      <IconSearch class="w-6 h-6 text-slate-100/50" />
    </span>
    <input
      :value="search"
      @input="emit('update:search', $event.target.value)"
      type="text"
      placeholder="Пошук фільмів"
      class="w-full bg-transparent outline-none text-slate-100" />
  </div>
</template>

<script setup>
defineProps({
  search: {
    type: String,
    requred: false,
  },
});

const emit = defineEmits({
  "update:search": null,
});
</script>

<style lang="scss"></style>
