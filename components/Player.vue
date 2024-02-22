<template>
    <div class="lg:w-[100%] h-[60px] fixed bottom-[40px] vs:w-[100%]">
        <audio :src="currentPlayList.currentMusic?.songUrl" id="currentAudio"
            :key="currentPlayList.currentMusic?.songUrl" />

        <div class="slidecontainer">
            <input type="range" ref="audioPlayer" :min="0" :max="maxValue" v-model="sliderValue" class="slider"
                id="myRange">
        </div>
        <div class="flex w-[100%] bg-[#2A3042] justify-between">
            <div class="flex items-center md:w-[50%] ">
                <div>
                    <img class="h-[60px] w-[60px] pt-[3px] mr-[10px]" :src="currentPlayList.currentMusic?.imageUrl">
                </div>
                <div>
                    <p class="text-white text-[14px]"> {{ currentPlayList.currentMusic?.artistNameEn }} </p>
                    <span class="text-[#999FB1] text-[13px]">{{ currentPlayList.currentMusic?.nameEn }}</span>
                </div>
            </div>
            <div class="flex items-center justify-evenly w-[50%]">
                <div class=" w-[60px]">
                    <span class="text-white">{{ calculateTime() }}</span>
                </div>
                <div>
                    <img class="hover:cursor-pointer" src="../assets/image/icon/LikedActive.png" alt="">
                </div>
                <div class="w-[30px] h-[30px] flex items-center justify-center">
                    <img v-if="state === ButtonType.play" @click="changeState(ButtonType.pause)"
                        class="hover:cursor-pointer w-[100%]" src="../assets/image/icon/Pause.png" alt="">
                    <div v-if="state === ButtonType.loading" class="loader"></div>
                    <img v-if="state === ButtonType.pause" @click="changeState(ButtonType.play)"
                        class="hover:cursor-pointer w-[18px]" src="../assets/image/icon/Play.svg" alt="">
                </div>
                <div>
                    <img @click="currentPlayList.prevCurrentMusic(), changeState(ButtonType.play)" class="hover:cursor-pointer"
                        src="../assets/image/icon/Previous.png" alt="">
                </div>
                <div>
                    <img v-if="currentPlayList.currentIndex == Number(currentPlayList.currentPlayList?.playList?.length) - 1"
                        class="hover:cursor-pointer" src="../assets/image/icon/Next.png" alt="">
                    <img v-else @click="currentPlayList.nextCurrentMusic(), changeState(ButtonType.play)" class="hover:cursor-pointer"
                        src="../assets/image/icon/Next.png" alt="">
                </div>
                <div class="vs:invisible lg:visible">
                    <NuxtLink :to="`/playList.${currentPlayList.currentPlayList?.id}.${PlayListType.customPlayList}`">
                        <img class="hover:cursor-pointer" src="../assets/image/icon/Playlist.png" alt="">
                    </NuxtLink>
                </div>
                <div class="vs:visible lg:invisible">
                    <img class="hover:cursor-pointer" src="../assets/image/icon/Playlist.png" alt="">
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { usePlayList } from "../core/store/playerStore";
import { PlayListType, ButtonType } from "../core/models/music";
import { state } from "../core/utils";
const currentPlayList = usePlayList()
const maxValue = ref(currentPlayList.currentMusic?.duration);
const sliderValue = ref();

watch(state,()=>{
    console.log(state.value);
    if (state.value == ButtonType.play) {
        const audio = document.getElementById('currentAudio')
        console.log('audio',audio);
        if (audio) {
            sliderValue.value = Math.floor(audio.currentTime)
        }
    }
    
}) 

// console.log("current mussic ", currentPlayList.currentMusic);
// console.log(currentPlayList.currentIndex);
// console.log("current duration ", currentPlayList.currentMusic?.duration);

console.log(sliderValue.value);
watch(sliderValue, (val) => {
    const audio = document.getElementById('currentAudio');
    if (audio) {
        audio.currentTime = sliderValue.value
    }
    console.log('val');
    console.log(sliderValue.value);
})
 
function changeState(stateType: ButtonType) {
    if (stateType === ButtonType.play) {
        state.value = ButtonType.loading
        setTimeout(() => {
            state.value = stateType
            playAudio();
        }, 2000);
    } else {
        state.value = stateType
        pauseAudio();
    }
}

function playAudio() {
    const audio = document.getElementById('currentAudio');
    if (audio) {
        audio.play();
        sliderValue.value = audio.currentTime
    }
}

function pauseAudio() {
    const audio = document.getElementById('currentAudio');
    if (audio) {
        audio.pause();
    }
}

const calculateTime = () => {
    if (sliderValue.value != undefined) {
        const minutes = Math.floor(sliderValue.value / 60);
        const seconds = Math.floor(sliderValue.value % 60);
        const returnedSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
        return `${minutes}:${returnedSeconds}`;
    }
}

</script>

<style scoped>
.slidecontainer {
    width: 100%;
    height: 16px;
}

.slider {
    /* -webkit-appearance: none; */
    width: 100%;
    height: 4px;
    border-radius: 5px;
    background: #d3d3d3;
    outline: none;
    opacity: 0.7;
    -webkit-transition: .2s;
    transition: opacity .2s;
}

.slider:hover {
    opacity: 1;
}

.slider::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: #fff703;
    cursor: pointer;
}

.slider::-moz-range-thumb {
    width: 5px;
    height: 5px;
    border-radius: 50%;
    background: #04AA6D;
    cursor: pointer;
}

/* loader animation start */
.loader {
    border: 1px solid #ffffff12;
    border-radius: 50%;
    border-top: 3px solid white;
    border-left: 1px solid white;
    width: 80%;
    height: 80%;
    animation: spin-254a34d2 1s linear infinite;
    /* position: absolute; */
    /* z-index: 12; */
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