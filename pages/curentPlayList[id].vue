<template>
    <div class="grid grid-cols-12 ">
        <div class="col-span-2">
            <Section></Section>
        </div>
        <div class="col-span-10 min-h-max bg-[#0D0F17] relative">
            <div class="absolute bg_image">
                <img src="../assets/image/front/nkar.png" alt="">
            </div>
            <div v-if="pending" class="absoleut w-[100%] h-[100%] bg-slate-400">Loading...</div>
            <Header></Header>
            <div class="p-[20px] relative z-1">
                <div class="h-[50px]"></div>
                <div class="flex justify-between">
                    <div class="flex">
                        <div>
                            <NuxtLink to="/">
                                <img class="hover:cursor-pointer" src="../assets/image/icon/HoverOn.png" alt="">
                            </NuxtLink>
                        </div>
                        <div class="flex items-center">
                            <div class="w-[224px] h-[224px] bg-[#171b26] p-[8px] rounded-[16px] mr-[15px] ml-[15px]">
                                <img v-if="curentList?.playList" class="w-[100%] h-[100%] rounded-[16px]"
                                    :src="curentList?.playList[0].imageUrl" alt="">
                            </div>
                            <div>
                                <p class="text-[28px] text-white text-center m-[10px]">{{ curentList?.nameEn }}
                                </p>
                                <div class="flex mixed_playback hover:cursor-pointer">
                                    <img class="m-[4px]" src="../assets/image/icon/Vector.png" alt="">
                                    <span class="ml-[8px] text-white text-[18px]">Mixed playback</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <img class="hover:cursor-pointer" src="../assets/image/icon/Like.png" alt="">
                    </div>
                </div>
                <div class="mt-[40px]">
                    <div class="bg-[#171b26] rounded-[16px] h-[64px] flex justify-between items-center mb-[15px]"
                        v-for="list in curentList?.playList">
                        <div class="flex h-[100%] items-center">
                            <div>
                                <img class="w-[64px] h-[64px] rounded-l-[16px]" :src="list.imageUrl" alt="">
                            </div>
                            <div class="ml-[20px]">
                                <p class="text-white text-[16px]">{{ list.artistNameEn }}</p>
                                <span class="text-[#999FB1] text-[13px]">{{ list.nameEn }}</span>
                            </div>
                        </div>
                        <audio controls>
                            <source :src="list.songUrl" type="audio/mpeg">
                            Your browser does not support the audio tag.
                        </audio>
                        <div class="mr-[20px]">
                            <img src="../assets/image/icon/Liked.png" alt="">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">

import { useMusicData, CustomPlayList } from "../core/models/music";
const routeId = useRoute().params.id
const curentList = ref<CustomPlayList>();
const musicStore = useMusicData();

const { data, pending, error, refresh } = await useAsyncData(
    'mountains',
    () => $fetch(`/api/v1/{en}/Other/GuestCustomPlayList?id=${routeId}`,
        {
            baseURL: 'https://surromusicapi.innoverse.tech',
            method: 'GET',
        }
    )
)


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
</style>