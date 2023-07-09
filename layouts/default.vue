<template>
  <TheHeader />
  <div class="container mx-auto grid grid-cols-[300px_1fr]">
    <TheSidebar />
    <main class="p-8">
      <slot />
    </main>
  </div>
</template>
