<template>
  <pre>{{ error }}</pre>
</template>

<script setup lang="ts">
import type { Error } from "composables/useError";
defineProps<{ error: Error }>();
</script>
