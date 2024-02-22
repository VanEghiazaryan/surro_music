<template>
    <div class="p-[20px]  bg-[#0D0F17]">
        <JustForYou class="" />
        <LastHeard />
        <div v-for="(music, index) in musicList">
           
            <CustomPlaylist v-bind:custom-play-list="music" :current-index="index">{{ music.nameEn }}</CustomPlaylist>
        </div>
    </div>
</template>

<script setup lang="ts">
import { CustomPlayList } from "../core/models/music";
import { useMusicData } from "../core/store/musicStore";

const musicStore = useMusicData();
const musicList = ref<Array<CustomPlayList>>([]);
    
onMounted(async () => {
    await musicStore.getCustomList().then((val) => {
        if (val) {
            musicList.value = val
        } 
    });
})

definePageMeta({
    layout: 'default'
})

</script>

<style scoped>
.bg_image {
    top: 100px;
    width: 30%;
    left: 20px;
    z-index: 0;
}

</style>