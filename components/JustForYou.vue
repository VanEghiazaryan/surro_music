<template>
    <div class="flex items-center">
        <div class="flex items-center w-[35%]">
            <div>
                <img class="mr-[17px]" src="../assets/image/front/Play.png" alt="">
            </div>
            <div>
                <p class="text-[41px] font-semibold text-white">Just for you</p>
                <p class="text-[#7A8192]">You will love this collection</p>
            </div>
        </div>
        <div class="flex gap-4 w-[65%]">
            <div class="p-[8px] bg-[#171b26] rounded-[10px] hover:bg-[#202530] player_div">
                <img class="h-[100%] w-[100%] rounded-[10px] hover:cursor-pointer" src="../assets/image/front/music1.png"
                    alt="">
                <img class="player_img" src="../assets/image/icon/Player.png" alt="">
            </div>
            <div class="p-[8px] bg-[#171b26] rounded-[10px] hover:bg-[#202530] player_div">
                <img class="h-[100%] w-[100%] rounded-[10px] hover:cursor-pointer" src="../assets/image/front/music2.png"
                    alt="">
                <img class="player_img" src="../assets/image/icon/Player.png" alt="">
            </div>
            <div class="p-[8px] bg-[#171b26] rounded-[10px] hover:bg-[#202530] player_div">
                <img class="h-[100%] w-[100%] rounded-[10px] hover:cursor-pointer" src="../assets/image/front/music3.png"
                    alt="">
                <img class="player_img" src="../assets/image/icon/Player.png" alt="">
            </div>
            <div class="p-[8px] bg-[#171b26] rounded-[10px] hover:bg-[#202530] player_div">
                <img class="h-[100%] w-[100%] rounded-[10px] hover:cursor-pointer" src="../assets/image/front/music4.png"
                    alt="">
                <img class="player_img" src="../assets/image/icon/Player.png" alt="">
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">

</script>

<style scoped>
.player_div {
    text-align: -webkit-right;
    position: relative;
}

.player_img {
    opacity: 0;
    position: absolute;
    right: 20px;
    bottom: -5px;
}

.player_div:hover .player_img {
    transition:  1s;
    bottom: 40px;
    opacity: 1;
}

</style>