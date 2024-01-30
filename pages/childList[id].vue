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
                <div class="flex justify-between">
                    <div class="flex">
                        <div>
                            <NuxtLink to="/">
                                <img class="hover:cursor-pointer" src="../assets/image/icon/HoverOn.png" alt="">
                            </NuxtLink>
                        </div>
                        <div class="flex items-center">
                            <div>
                                <p class="text-[28px] text-white text-center ml-[10px]"> {{ childList?.nameEn }} </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="mt-[40px]">
                    <div class="grid grid-cols-4 gap-4 ">
                        <div v-for="list in childList?.childList" class=" m-[10px]">
                            <div class="grid grid-cols-2 gap-2">
                                <div v-for="(child, index) in list.playList">
                                    <div v-if="index <= 3">
                                        <img class="w-[100%] h-[69px] rounded-[10px]" :src="child.imageUrl" alt="">
                                    </div>
                                </div>
                            </div>
                            <div>
                                <p class="text-white">{{ list.nameEn }}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useMusicData, CustomPlayList } from "../core/models/music";

const routeId = useRoute().params
const childList = ref<CustomPlayList>();
const musicStore = useMusicData();
console.log(routeId.id);

onMounted(async () => {
    await musicStore.getCustomList().then((val) => {
        if (musicStore.fetchedData) {
            childList.value = musicStore.fetchedData[Number(routeId.id)];
            console.log(childList.value);
        }
    });
})



</script>

<style scoped>
.bg_image {
    top: 100px;
    width: 30%;
    left: 20px;
    z-index: 0;
}

.mixed_playback {
    padding: 8px;
    background: linear-gradient(45deg, #FF786E, #D92C75);
    border-radius: 40px;
    width: 200px;
    justify-content: center;
}
</style>