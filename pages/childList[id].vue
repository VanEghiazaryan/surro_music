<template>
    <div class="p-[20px] relative z-1 bg-[#0D0F17]">
        <div class="absolute bg_image">
            <img src="../assets/image/front/nkar.png" alt="">
        </div>
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
            <div class="grid gap-4 vs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 pl-[60px] pr-[60px] ">
                <div v-for="list in childList?.childList" class=" m-[10px]  relative gap_div">
                    <div>
                        <div class="grid grid-cols-2 gap-x-2  ">
                            <div v-for="(child, index) in list.playList">
                                <div v-if="index <= 3"  class="grid gap-2  pb-2 w-[100%] h-[100%]" >
                                    <img class="w-[100%] h-[100%] rounded-[10px] " :src="child.imageUrl" alt="">
                                </div>
                            </div>

                        </div>
                        <div>
                            <div class=" w-[100%] flex justify-center ">
                                <img class="player_img xl:w-[65px] xl:h-[65px]" src="../assets/image/icon/Player.png"
                                    alt="">
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
import { CustomPlayList } from "../core/models/music";
import { useMusicData } from "../core/store/musicStore";
const routeId = useRoute().params
const childList = ref<CustomPlayList>();
const musicStore = useMusicData();


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

@media only screen and (min-device-width: 368px) and (max-device-width: 1024px) {
    #section_class {
        z-index: 50;
        width: 100%;
    }
}

.player_img {
    opacity: 0;
    position: absolute;
    bottom: 0px;
}

.gap_div:hover .player_img {
    transition: 200ms;
    bottom: 47%;
    opacity: 1;
    cursor: pointer;
    left: 37%;
}
</style>