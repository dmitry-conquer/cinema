<template>
  <div class="space-x-8 flex justify-end mt-6">
    <button
      :disabled="page <= 1"
      @click="prevPage"
      class="px-6 py-3 rounded-lg bg-secondary disabled:opacity-50 hover:enabled:bg-secondary/90"
      type="button">
      <IconSimpleArrow class="w-6 h-6 rotate-180" />
    </button>
    <button
      @click="nextPage"
      class="px-6 py-3 rounded-lg bg-secondary hover:enabled:bg-secondary/90 transition-colors"
      type="button">
      <IconSimpleArrow class="w-6 h-6" />
    </button>
  </div>
</template>

<script setup>
const props = defineProps({
  page: {
    type: Number,
    required: true,
  },
});

const emit = defineEmits({
  "change-page": value => typeof value === "number",
});

const prevPage = () => {
  if (props.page > 1) {
    emit("change-page", props.page - 1);
  }
};
const nextPage = () => {
  emit("change-page", props.page + 1);
};
</script>

<style lang="scss"></style>
