export default defineNuxtRouteMiddleware((to, from) => {
  const user = useSupabaseUser();

  // auth routes
  if (to.path === "/login" && user.value !== null) {
    return navigateTo("/");
  }
  if (to.path === "/register" && user.value !== null) {
    return navigateTo("/");
  }
  if (to.path === "/logout" && user.value === null) {
    return navigateTo("/");
  }

  // admin routes
  if (to.path.startsWith("/admin") && !user.value?.app_metadata?.claims_admin) {
    return navigateTo("/?auth=denied");
  }
});
