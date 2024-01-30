<template>
    <div class="mt-[30px]">
        <div class="flex mb-[15px]">
            <p class="text-[20px] text-[white]">
                <slot />
            </p>
            <img class="ml-[10px]" src="../assets/image/icon/More.png" alt="">
        </div>
        <div class="flex gap-4 w-full overflow-x-auto scroll_none">
            <div v-for="(music, index) in musicList?.childList">
                <NuxtLink v-if="index" :to="`/curentPlayList${music.id}`">
                    <button>
                        <div v-if="music.playList"
                            class="p-[8px] bg-[#171b26] rounded-[10px] w-[162px] h-[162px] hover:bg-[#202530] player_div">
                            <img class="h-[100%] w-[100%] rounded-[10px] hover:cursor-pointer"
                                :src="music.playList[0].imageUrl" alt="">
                            <img class="player_img" src="../assets/image/icon/Player.png" alt="">
                        </div>
                        <div v-if="music.playList">
                            <p class="text-white text-[15px]">{{ music.nameEn }}</p>
                            <div class="text-[#999FB1] text-[12px] w-[100%] h-[22px] overflow-y-hidden ">
                                {{ music.playList[0].artistNameHy + ', ' + music.playList[1].artistNameHy }}</div>
                        </div>
                    </button>
                </NuxtLink>
            </div>
            <NuxtLink :to="`/childList${curentId}`">
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
import { useMusicData, CustomPlayList } from "../core/models/music";

const musicStore = useMusicData();
const musicList = ref<CustomPlayList>()
onMounted(async () => {
    await musicStore.getCustomList().then((val) => {
        musicList.value = musicStore.fetchedData[props.curentId]
    });
})
const props = defineProps({
    curentId: { type: Number, required: true }
})

</script>

<style scoped>
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
    right: 20px;
    bottom: -5px;
}

.player_div:hover .player_img {
    transition: 1s;
    bottom: 40px;
    opacity: 1;
}
</style>