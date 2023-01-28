<template>
  <form
    @submit.prevent="() => register(email, password, passwordConfirm)"
    class="grid grid-col-1 gap-2"
  >
    <h1>Login</h1>
    <input placeholder="Email..." type="text" v-model="email" />
    <input placeholder="Password..." type="password" v-model="password" />
    <input
      placeholder="Confirm password..."
      type="password"
      v-model="passwordConfirm"
    />
    <button type="submit">Login</button>
  </form>
</template>

<script setup lang="ts">
const email = ref<string>();
const password = ref<string>();
const passwordConfirm = ref<string>();
const { register } = useSupabaseAuth();
</script>
