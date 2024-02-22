<template>
    <div class="lg:flex items-center">
        <div class="flex items-center lg:w-[40%]">
            <div class="vs:invisible sm:visible mb-[10px]">
                <img class="sm:w-[80%] lg:w-[100%] mr-[17px] vs:w-0" src="../assets/image/front/Play.png" alt="">
            </div>
            <div class="ml-[15px] mt-[-18px]">
                <p class="xl:text-[45px] lg:text-[35px]  font-semibold text-white md:text-[30px] vs:text-[30px]">Just for you</p>
                <p class="text-[#7A8192]">You will love this collection</p>
            </div>
        </div>
        <div class="flex gap-4 lg:w-[60%]  overflow-x-auto scroll_none">
            <div class="vs:visible sm:invisible sm:w-0">
                <div class=" player_div w-[162px] h-[162px] flex items-center justify-center">
                    <img class="h-[60%] lg:w-[60%] rounded-[10px] hover:cursor-pointer"
                        src="../assets/image/front/Play.png" alt="">
                </div>
            </div>
            <div>
                <div class="p-[8px] bg-[#171b26] rounded-[10px] hover:bg-[#202530] player_div w-[162px] h-[162px]">
                    <img class="h-[100%] lg:w-[100%] rounded-[10px] hover:cursor-pointer"
                        src="../assets/image/front/music1.png" alt="">
                    <img class="player_img" src="../assets/image/icon/Player.png" alt="">
                </div>
            </div>
            <div>
                <div class="p-[8px] bg-[#171b26] rounded-[10px] hover:bg-[#202530] player_div w-[162px] h-[162px]">
                    <img class="h-[100%] lg:w-[100%] rounded-[10px] hover:cursor-pointer"
                        src="../assets/image/front/music2.png" alt="">
                    <img class="player_img" src="../assets/image/icon/Player.png" alt="">
                </div>
            </div>
            <div>
                <div class="p-[8px] bg-[#171b26] rounded-[10px] hover:bg-[#202530] player_div w-[162px] h-[162px]">
                    <img class="h-[100%] lg:w-[100%] rounded-[10px] hover:cursor-pointer"
                        src="../assets/image/front/music3.png" alt="">
                    <img class="player_img" src="../assets/image/icon/Player.png" alt="">
                </div>
            </div>
            <div>
                <div class="p-[8px] bg-[#171b26] rounded-[10px] hover:bg-[#202530] player_div w-[162px] h-[162px]">
                    <img class="h-[100%] lg:w-[100%] rounded-[10px] hover:cursor-pointer"
                        src="../assets/image/front/music4.png" alt="">
                    <img class="player_img" src="../assets/image/icon/Player.png" alt="">
                </div>
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
    bottom: 0px;
}

.player_div:hover .player_img {
    transition: 200ms;
    bottom: 20px;
    opacity: 1;
}

.scroll_none::-webkit-scrollbar {
    display: none;
}

:-webkit-scrollbar {
    width: 0px;
}
</style>