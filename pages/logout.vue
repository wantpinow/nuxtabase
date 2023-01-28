<script setup lang="ts">
const { logout } = useSupabaseAuth();
await logout();
</script>
