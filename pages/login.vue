<template>
  <form
    @submit.prevent="() => login(email, password)"
    class="grid grid-col-1 gap-2"
  >
    <h1>Login</h1>
    <input placeholder="Email..." type="text" v-model="email" />
    <input placeholder="Password..." type="password" v-model="password" />
    <button type="submit">Login</button>
  </form>
</template>

<script setup lang="ts">
const email = ref<string>();
const password = ref<string>();
const { login } = useSupabaseAuth();
</script>
