<template>
  <div class="w-full max-w-[800px] bg-primary-light px-8 py-5 rounded-md mt-12">
    <ul
      ref="chatList"
      class="flex flex-col space-y-3 h-[450px] overflow-y-auto scroll-smoothe">
      <li
        v-for="(messages, i) in chatHistory"
        :key="i"
        :class="{ 'self-start': messages.role === 'assistant', 'self-end': messages.role !== 'assistant' }"
        class="p-2 rounded-2xl max-w-[450px] flex gap-4">
        <div
          v-if="messages.role === 'assistant'"
          class="pt-1">
          <IconAI class="w-6 h-6" />
        </div>
        <div
          :class="{ 'bg-primary/40': messages.role !== 'assistant', 'bg-secondary/80': messages.role === 'assistant' }"
          class="p-3 rounded-md">
          <p class="text-sm">{{ messages.content }}</p>
        </div>
      </li>
      <li
        v-if="typing"
        class="py-2 px-5 ml-2 rounded-md bg-primary/30 self-start">
        Пишу...
      </li>
    </ul>
    <form
      @submit.prevent="sendMessage"
      class="flex items-center p-3 rounded-sm bg-primary/30 justify-between w-full border border-secondary/50 mt-8">
      <input
        v-model="inputData"
        class="text-slate-100 bg-transparent w-full outline-none"
        placeholder="Напиши мені щось..." />
      <button
        class=""
        type="button">
        <IconSend class="w-6 h-6 text-secondary" />
      </button>
    </form>
  </div>
</template>

<script setup>
const chatList = ref("");
const inputData = ref("");
const typing = ref(false);

const chatHistory = ref([
  { role: "assistant", content: "Привіт, я віртуальний помічник у світі кіноіндустрії" },
  { role: "assistant", content: "Можеш запитити в мене будь-що, я з радістю з тобою поспілкуюся" },
]);

function sendMessage() {
  typing.value = true;
  chatHistory.value = [...chatHistory.value, { role: "user", content: inputData.value }];
  setTimeout(() => {
    chatList.value.scrollTop = chatList.value.scrollHeight;
  }, 10);
  inputData.value = "";
  $fetch("/api/chat", {
    method: "POST",
    body: JSON.stringify({ messages: chatHistory.value }),
  }).then(res => {
    typing.value = false;
    chatHistory.value = [...chatHistory.value, res];
    setTimeout(() => {
      chatList.value.scrollTop = chatList.value.scrollHeight;
    }, 10);
  });
}
</script>

<style lang="scss" scoped>
ul {
/* Firefox */
* {
  scrollbar-width: thin;
  scrollbar-color: #575757 #202122;
}

/* Chrome, Edge and Safari */
*::-webkit-scrollbar {
  width: 4px;
}
*::-webkit-scrollbar-track {
  border-radius: 2px;
  background-color: #202122;
}

*::-webkit-scrollbar-track:hover {
  background-color: #b8c0c2;
}

*::-webkit-scrollbar-track:active {
  background-color: #b8c0c2;
}

*::-webkit-scrollbar-thumb {
  border-radius: 5px;
  background-color: #575757;
}

*::-webkit-scrollbar-thumb:hover {
  background-color: #575757;
}

*::-webkit-scrollbar-thumb:active {
  background-color: #575757;
}
}

</style>
