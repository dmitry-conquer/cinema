<template>
  <aside class="flex flex-col h-screen px-5 py-8 overflow-y-auto border-r border-slate-400/50">
    <nav class="text-slate-50">
      <ul class="space-y-8">
        <li
          v-for="section in SIDEBAR_NAVIGATION"
          :key="section.label">
          <h2 class="mb-3 font-bold text-2xl">{{ section.label }}</h2>
          <ul class="space-y-3 flex flex-col items-start">
            <li
              v-for="item in section.items"
              :key="item.name">
              <NuxtLink
                :to="item.url"
                class="flex gap-3 items-center relative">
                <component
                  :is="item.icon"
                  class="w-5 h-5" />
                <span class="font-medium">{{ item.name }}</span>
                <span
                  v-if="item.slug"
                  class="text-[12px] font-bold text-white px-1.5 leading-4 rounded-full absolute -right-3 -top-1.5 bg-secondary/90 rotate-[10deg]"
                  >{{ item.slug }}</span
                >
              </NuxtLink>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  </aside>
</template>

<script setup>
const { SIDEBAR_NAVIGATION } = useConstants();
</script>

<style lang="scss">
.router-link-exact-active {
  color: #3b82f6;
  span {
    font-weight: 700;
  }
}
</style>
