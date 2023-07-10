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
          v-if="!firebaseStore.currentUser"
          @click="signInHandle"
          class="px-4 py-2 bg-secondary rounded-xl">
          signin
        </button>
        <button
          v-else
          @click="signOutHandle"
          class="px-4 py-2 bg-secondary rounded-xl">
          signout
        </button>
        <ClientOnly>
          <pre>
        {{ firebaseStore.currentUser }}
      </pre
          >
        </ClientOnly>
        <div v-if="firebaseStore.currentUser">already signed in</div>
        <div v-else>SIGNED IN</div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useFirebaseStore } from "~/stores/firestoreUser";
const firebaseStore = useFirebaseStore();

const email = ref("");
const password = ref("");

async function createUserHandle() {
  createUser(email.value, password.value);
}

async function signInHandle() {
  signIn(email.value, password.value);
}

async function signOutHandle() {
  signOutUser();
}
</script>

<style lang="scss"></style>
