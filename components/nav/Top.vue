<template>
  <div class="p-4 border-b border-black flex justify-between">
    <nuxt-link to="/"> Nuxtabase </nuxt-link>
    <div v-if="user">
      <span class="mr-2">{{ user.email }}</span>
      <nuxt-link to="/logout">Logout</nuxt-link>
    </div>
    <div v-else>
      <nuxt-link to="/login" class="mr-2"> Login </nuxt-link>
      <nuxt-link to="/register"> Register </nuxt-link>
    </div>
  </div>
</template>

<script setup lang="ts">
const user = useSupabaseUser();
</script>
