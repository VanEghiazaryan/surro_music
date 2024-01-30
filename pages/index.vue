<template>
    <div class="grid grid-cols-12 ">
        <div class="col-span-2">
            <Section></Section>
        </div>
        <div class="col-span-10 ">
            <Header></Header>
            <div class="p-[20px] relative z-1 bg-[#0D0F17]">
                <div class="absolute bg_image">
                    <img src="../assets/image/front/nkar.png" alt="">
                </div>
                <div class="h-[50px]"></div>
                <JustForYou class="relative" />
                <LastHeard />
                <div v-for="(music, index) in musicList"  >
                    <CustomPlaylist :curent-id="index" >{{music.nameEn}}</CustomPlaylist> 
                </div>
                <HeatsDay />
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useMusicData , CustomPlayList } from "../core/models/music";

const musicStore = useMusicData();
const musicList = ref<Array<CustomPlayList>>();

onMounted(async () => {
    await musicStore.getCustomList().then((val) => {
        musicList.value = musicStore.fetchedData
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