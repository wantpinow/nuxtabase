<template>
  <div class="absolute top-0 right-0 p-4">
    <errors-error v-for="error in errors" :error="error" />
  </div>
</template>

<script setup lang="ts">
import { useRouteQuery } from "@vueuse/router";

const { errors, addError } = useError();

onMounted(() => {
  const authQuery = useRouteQuery("auth");
  if (authQuery.value === "denied") {
    addError({
      message: "Permission denied.",
      type: "error",
    });
  }
  authQuery.value = null;
});
</script>
