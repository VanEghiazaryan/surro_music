<template>
    <div class="mt-[30px]">
        <NuxtLink :to="`/childList${currentIndex}`">
            <div class="flex mb-[15px]">
                <p class="text-[20px] text-[white]">
                    <slot />
                </p>
                <img class="ml-[10px]" src="../assets/image/icon/More.png" alt="">
            </div>
        </NuxtLink>
        <div class="flex w-full overflow-hidden">
            <div v-for="(list, index) in customPlayList?.childList" class="relative  gap_div" :key="index">
                <button @click="" class="relative w-[40px] h-[40px] flex justify-center like_img items-center z-30">
                    <img @click="like.LikeInPlayList(list.id)" class="w-[100%] h-[100%]"
                        src="../assets/image/icon/like.png" alt="">
                </button>
                <button>
                    <NuxtLink :to="`playList.${list.id}.${PlayListType.customPlayList}`">
                        <div v-if="list.playList"
                            class="p-[8px] mr-[15px] bg-[#171b26] rounded-[10px] w-[162px] h-[162px] hover:bg-[#202530] player_div">
                            <img class="h-[100%] w-[100%] rounded-[10px] hover:cursor-pointer"
                                :src="list.playList[0].imageUrl" alt="">
                        </div>
                        <div v-if="list.playList">
                            <p class="text-white text-[15px]">{{ list.nameEn }}</p>
                            <div class="text-[#999FB1] text-[12px] w-[100%] h-[22px] overflow-y-hidden ">
                                {{ list.playList[0].artistNameHy + ', ' + list.playList[1].artistNameHy }}</div>
                        </div>
                    </NuxtLink>
                </button>
                <div v-if="playList.currentPlayList?.id === list.id">
                    <PlayButtonState></PlayButtonState>
                </div>
                <div v-else>
                    <button @click="changeState(list)"
                        class="relative w-[40px] h-[40px] flex justify-center player_img items-center z-30">
                        <img class="w-[100%] h-[100%]" src="../assets/image/icon/PlayerBG.png" alt="">
                        <div class="absolute w-[20px h-[20px] ml-[4px]" :key="index">
                            <img src="../assets/image/icon/Play.svg" alt="" class="w-[100%] h-[100%]">
                        </div>
                    </button>
                </div>

            </div>
            <NuxtLink :to="`/childList${currentIndex}`">
                <div>
                    <div
                        class="flex p-[8px] bg-[#171b26] rounded-[10px] w-[162px] h-[162px] hover:bg-[#202530] cursor-pointer">
                        <img class="m-auto h-[50%] w-[50%] rounded-[10px]" src="../assets/image/icon/More.png" alt="">
                    </div>
                    <p class="text-white text-[15px]">-</p>
                </div>
            </NuxtLink>
        </div>
    </div>
</template>

<script setup lang="ts">
import { PlayListType, ButtonType, CustomPlayList } from "../core/models/music";
import { state } from "../core/utils";
import { usePlayList } from "../core/store/playerStore";
import { useAuthStore } from "../core/store/authStore";
import { usePlayListLike } from "../core/store/likeStore";
const auth = useAuthStore();
const playList = usePlayList()
const like = usePlayListLike()
import type { PropType } from 'vue'

const props = defineProps({
    customPlayList: {
        type: Object as PropType<CustomPlayList>,
        required: true,
    },
    currentIndex: {
        type: Number,
        required: true,
    }
})




function changeState(list: CustomPlayList) {
    playList.setCurrentList(list)
    if (state.value == ButtonType.pause) {
        state.value = ButtonType.loading

        setTimeout(() => {
            state.value = ButtonType.play
        }, 2000);
    } else {
        state.value = ButtonType.pause
    }
}
</script>

<style scoped>

.newdiv {
  width: 300px; /* Set the width of the container */
  height: 200px; /* Set the height of the container */
  overflow-x: auto; /* Enable horizontal overflow scrolling */
  overflow-y: hidden; /* Hide vertical overflow */
  touch-action: pan-x; /* Allow horizontal panning via touch */
  white-space: nowrap; /* Prevent items from wrapping */
}

.item {
  width: 100px; /* Set the width of each item */
  height: 100px; /* Set the height of each item */
  background-color: #3498db; /* Set a background color for each item */
  display: inline-block; /* Display items inline */
  margin-right: 10px; /* Add some spacing between items */
}

.scroll_none::-webkit-scrollbar {
    display: none;
}

:-webkit-scrollbar {
    width: 0px;
    background: transparent;
}

.player_div {
    text-align: -webkit-right;
    position: relative;
}

.player_img {
    opacity: 0;
    position: absolute;
    right: 30px;
    bottom: 0px;
}

.like_img {
    opacity: 0;
    position: absolute;
    right: 30px;
    top: 0px;
}

.gap_div:hover .like_img {
    transition: 200ms;
    top: 20px;
    opacity: 1;
    cursor: pointer;
}

.gap_div:hover .player_img {
    transition: 200ms;
    bottom: 60px;
    opacity: 1;
    cursor: pointer;
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

/* loader animation start */
.loader {
    border: 1px solid #ffffff12;
    border-radius: 50%;
    border-top: 3px solid white;
    border-left: 1px solid white;
    width: 80%;
    height: 80%;
    animation: spin-254a34d2 1s linear infinite;
    position: absolute;
    z-index: 12;
}

@-webkit-keyframes spin {
    0% {
        -webkit-transform: rotate(0deg);
    }

    100% {
        -webkit-transform: rotate(360deg);
    }
}

@keyframes spin {
    0% {
        transform: rotate(0deg);
    }

    50% {
        border-left-style: hidden;
    }

    100% {
        transform: rotate(360deg);
    }
}

/* loader animation end */
</style>