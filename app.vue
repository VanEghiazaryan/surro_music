<template>
  <NuxtLayout>

  </NuxtLayout>
</template>
<script setup lang="ts">

useSeoMeta({
  title: 'Surro Mussic',
})
import { usePlayList } from "./core/store/playerStore";
import { useAuthStore } from "./core/store/authStore";
const currentPlayList = usePlayList()
const useAuth = useAuthStore()
onMounted(() => {
  currentPlayList.getCurrentPlayList();
  useAuth.userData()
});
</script>