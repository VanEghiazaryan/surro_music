<template>
    <button class="relative w-[50px] h-[50px] flex justify-center">
        <img class="w-[100%] h-[100%]" src="../assets/image/icon/PlayerBG.png" alt="">
        <div class="music_wave">
            <div class="wave"></div>
            <div class="wave"></div>
            <div class="wave"></div>
            <div class="wave"></div>
            <div class="wave"></div>
        </div> 
    </button>

    <button class="relative w-[50px] h-[50px] flex justify-center mt-10 ml-10">
        <div class="music_wave z-30">
            <div class="wave"></div>
            <div class="wave"></div>
            <div class="wave"></div>
            <div class="wave"></div>
            <div class="wave"></div>
        </div>
        <img class="w-[100%] h-[100%] absolute z-20" src="../assets/image/icon/PlayerBG.png" alt="">
        <div class="music_scale1">
            <div class="music_scale2  w-[50px] h-[50px] rounded-[50%]">

            </div>
        </div>
    </button>

    <button class="relative w-[50px] h-[50px] flex justify-center items-center mt-10 ml-10">
        <img class="w-[100%] h-[100%]" src="../assets/image/icon/PlayerBG.png" alt="">
        <div class="loader"></div>
    </button>
</template>

<script setup lang="ts">

</script>

<style scoped>
/* scale animation start */
.music_scale1 {
    position: absolute;
    z-index: 1;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    background: linear-gradient(#ffbfbab0, #fc80b46b);
    animation-name: musicScale1;
    opacity: 0.8;
    animation-duration: 2s;
    animation-direction: reverse;
    animation-timing-function: linear;
    animation-iteration-count: infinite;
}

.music_scale2 {
    position: absolute;
    z-index: 2;
    width: 95%;
    height: 95%;
    display: flex;
    justify-content: center;
    align-items: center;
    opacity: 0.5;
    border-radius: 50%;
    background: linear-gradient(#ff7f7696, #d92c74);
    animation-name: musicScale2;
    animation-duration: 2s;
    animation-direction: reverse;
    animation-timing-function: linear;
    animation-iteration-count: infinite;

}

@keyframes musicScale1 {

    0% {
        transform: scale(1);
    }

    50% {
        transform: scale(1.3);
    }

    100% {
        transform: scale(1);
    }
}

@keyframes musicScale2 {

    0% {
        transform: scale(1);
    }

    50% {
        transform: scale(1.3);
    }

    100% {
        transform: scale(1);
    }
}

/* scale animation end */


/* music wave animation start */
.music_wave {
    width: 75%;
    height: 100%;
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
}

.music_wave .wave {
    width: 2px;
    height: 50%;
    border-radius: 5px;
    animation: musicwave 1s ease-in-out infinite;
}

@keyframes musicwave {

    0%,
    100% {
        transform: scaleY(0.1);
    }

    50% {
        transform: scaleY(0.7);
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