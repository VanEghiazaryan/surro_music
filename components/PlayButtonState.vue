<template>
    <button @click="changeState()" class="relative w-[40px] h-[40px] flex justify-center items-center player_img">
        <img class="w-[100%] h-[100%]" src="../assets/image/icon/PlayerBG.png" alt="">
        <div v-if="state === ButtonType.pause" class="absolute w-[20px h-[20px] ml-[4px]">
            <img src="../assets/image/icon/Play.svg" alt="" class="w-[100%] h-[100%]">
        </div>
        <div v-if="state === ButtonType.play" class="absolute w-[70%] h-[70%] ">
            <div class="music_wave">
                <div class="wave"></div>
                <div class="wave"></div>
                <div class="wave"></div>
                <div class="wave"></div>
                <div class="wave"></div>
            </div>
        </div>
        <div v-if="state === ButtonType.loading" class="loader">
        </div>
    </button>
</template>

<script setup lang="ts">
import { ButtonType } from "../core/models/music";
import { state } from "../core/utils";
import { usePlayList } from "../core/store/playerStore";
const playList = usePlayList();

function changeState() {
    if (state.value == ButtonType.pause) {
        state.value = ButtonType.loading;
        setTimeout(() => {
            state.value = ButtonType.play;
    
        }, 2000);
    } else {
        state.value = ButtonType.pause;
    }
}

</script>

<style scoped>

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