<template>
    <div class="p-[20px] relative z-1 bg-[#0D0F17] min-h-screen">
        <div class="flex justify-between">
            <div class="flex">
                <div>
                    <NuxtLink to="/">
                        <img class="hover:cursor-pointer"
                         src="../assets/image/icon/HoverOn.png" alt="">
                    </NuxtLink>
                </div>
                <div class="sm:flex items-center vs:block">
                    <div class="w-[224px] h-[224px] vs:w-[180px] vs:h-[180px] bg-[#171b26] p-[8px] rounded-[16px] mr-[15px] ml-[15px]">
                        <img v-if="curentList?.playList" class="w-[100%] h-[100%] rounded-[16px]"
                            :src="curentList?.playList[0].imageUrl" alt="">
                    </div>
                    <div>
                        <p class="vs:text-[20px] sm:text-[28px] text-white text-center m-[10px]">{{ curentList?.nameEn }}
                        </p>
                        <div class="flex mixed_playback hover:cursor-pointer">
                            <img class="m-[4px]" src="../assets/image/icon/Vector.png" alt="">
                            <span class="ml-[8px] text-white sm:text-[18px]">Mixed playback</span>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <img class="hover:cursor-pointer" src="../assets/image/icon/Like.png" alt="">
            </div>
        </div>
        <div class="mt-[40px]">
            <div v-for="(list, index) in curentList?.playList" :key="list.toString() + index"
            class="bg-[#171b26] rounded-[16px] h-[64px] flex justify-between items-center mb-[15px]"
                 @click="currentMusic.setCurrentMusic(list, index)">
                <div class="flex h-[100%] items-center w-[80%]">
                    <div class="w-[64px] h-[64px] relative">
                        <div v-if="list.id === currentMusic.currentMusic?.id && state === ButtonType.play" class="absolute bg-[#00000036] w-[100%] h-[100%] flex justify-center items-center">
                            <div v-if="state === ButtonType.play" class="absolute w-[70%] h-[70%] ">
                                <div class="music_wave">
                                    <div class="wave"></div>
                                    <div class="wave"></div>
                                    <div class="wave"></div>
                                    <div class="wave"></div>
                                    <div class="wave"></div>
                                </div>
                            </div>
                        </div>
                        <img class="w-[100%] h-[100%] rounded-l-[16px]" :src="list.imageUrl" alt="">
                    </div>
                    <div class="ml-[20px] sm:w-[50%] vs:w-[60%]">
                        <p class="text-white text-[16px]">{{ list.artistNameEn }}</p>
                        <span class="text-[#999FB1] text-[13px]">{{ list.nameEn }}</span>
                    </div>
                </div>
                <div class="mr-[20px] w-[20%] flex justify-end">
                    <img src="../assets/image/icon/Liked.png" alt="">
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">

import { CustomPlayList, ButtonType } from "../core/models/music";
import { useMusicData } from "../core/store/musicStore";
import { usePlayList } from "../core/store/playerStore";
import { state } from "../core/utils";
const routeId = useRoute().params.id
const curentList = ref<CustomPlayList>();
const musicStore = useMusicData();
const currentMusic = usePlayList()


onMounted(async () => {

    musicStore.getCustomList(Number(routeId)).then((val) => {
        if (musicStore.currentList) {
            curentList.value = musicStore.currentList
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

@media only screen and (min-device-width: 368px) and (max-device-width: 1024px) {
    #section_class {
        z-index: 50;
        width: 100%;
    }
}

/* music wave animation start */
.music_wave {
    width: 100%;
    height: 100%;
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
}

.music_wave .wave {
    width: 2px;
    /* height: 70%; */
    border-radius: 5px;
    animation: musicwave 1s infinite;
}

@keyframes musicwave {

    0%,
    100% {
        transform: scaleY(0.1);
        height: 70%;
    }

    50% {
        transform: scaleY(0.7);
        height: 70%;
    }
}

.music_wave .wave:nth-child(1) {
    background-color: white;
    animation-delay: 1s;
}

.music_wave .wave:nth-child(2) {
    background-color: white;
    animation-delay: 0.6s;
}

.music_wave .wave:nth-child(3) {
    background-color: white;
    animation-delay: 0.8s;
}

.music_wave .wave:nth-child(4) {
    background-color: white;
    animation-delay: 0.6s;
}

.music_wave .wave:nth-child(5) {
    background-color: white;
    animation-delay: 1s;
}

/* music wave animation end */
</style>