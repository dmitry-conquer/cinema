<template>
  <div>
    <div class="">
      <div class="flex space-x-3 mb-5">
        <input
          v-model="email"
          type="text"
          placeholder="email"
          class="bg-transparent" />
        <input
          v-model="password"
          type="text"
          placeholder="password"
          class="bg-transparent" />
      </div>
      <div class="flex space-x-3">
        <button
          @click="createUserHandle"
          class="px-4 py-2 bg-secondary rounded-xl">
          register
        </button>
        <button
          @click="signInHandle"
          class="px-4 py-2 bg-secondary rounded-xl">
          signin
        </button>
        <button
          @click="signOutHandle"
          class="px-4 py-2 bg-secondary rounded-xl">
          signout
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
const email = ref("");
const password = ref("");

async function createUserHandle() {
  const credential = await createUser(email.value, password.value);
  console.log(credential);
}

async function signInHandle() {
  const credential = await signIn(email.value, password.value);
  console.log(credential);
}

async function signOutHandle() {
  const result = await signOutUser();
  console.log(result);
}
</script>

<style lang="scss"></style>
