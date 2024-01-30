<template>
    <div class="grid grid-cols-12 ">
        <div class="col-span-2">
            <Section></Section>
        </div>

        <div class="col-span-10 bg-[#0D0F17] relative min-h-screen">
            <Header></Header>
            <div class="p-[20px] relative z-1">
                <div class="h-[50px]"></div>
                <div class="text-center relative">
                    <img class="absolute top-[20%] left-[6%]" src="../assets/image/icon/Search.png" alt="">
                    <input v-model="searchName"
                        class="w-[90%] p-[8px] bg-[#2f3544] pl-[45px] rounded-[10px] outline-0 text-white"
                        placeholder="artist, music" type="text">
                </div>
                <div v-if="playList != null || channelList != null || searchName == null || searchName === '' " class="w-[90%] m-auto pt-[20px]">
                    <div v-if="playList != null">
                        <div class="flex items-center">
                            <span class="text-white text-[25px] font-semibold">Music</span>
                            <img class="mt-[7px]" src="../assets/image/icon/More.png" alt="">
                        </div>
                        <div class="mt-[15px]">
                            <div v-for="(list, index) in playList">
                                <div v-if="index <= 10"  class="bg-[#171b26] rounded-[16px] h-[64px] flex justify-between items-center mb-[15px]">
                                    <div class="flex h-[100%] items-center" >
                                        <div>
                                            <img class="w-[64px] h-[64px] rounded-l-[16px]"
                                                :src="list.imageUrl" alt="">
                                        </div>
                                        <div class="ml-[20px]">
                                            <p class="text-white text-[16px]">{{ list.artistNameEn }}</p>
                                            <span class="text-[#999FB1] text-[13px]">{{ list.nameEn }}</span>
                                        </div>
                                    </div>
                                    <div class="mr-[20px]">
                                        <img src="../assets/image/icon/Liked.png" alt="">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div v-if="channelList != null">
                        <div class="flex items-center">
                            <span class="text-white text-[25px] font-semibold">Channels</span>
                            <img class="mt-[7px]" src="../assets/image/icon/More.png" alt="">
                        </div>
                        <div v-for="(channel, index) in channelList" class="mt-[15px]">
                            <div v-if="index <= 3" class="flex items-center">
                                <img src="../assets/image/icon/Player.png" alt="">
                                <button class="text-white text-[20px] ml-[20px]">{{ channel.nameEn }}</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div v-else class="flex justify-center mt-[140px]">
                    <div v-if="searchName != null && (!playList || !channelList)" class="loader"></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ChannelList, PlayList, SearchModel } from "../core/models/music";
const searchName = ref()
const channelList = ref<Array<ChannelList>>();
const playList = ref<Array<PlayList>>();
const dataError = ref();
watch(searchName, async (newSearchData) => {
    try {
        const { data, pending, error, status, refresh } = await useAsyncData<SearchModel>(
            'mountains',
            () => $fetch(`/api/v1/{en}/Other/GuestSearch?q=${newSearchData}`,
                {
                    baseURL: 'https://surromusicapi.innoverse.tech',
                    method: 'GET',
                }
            )
        )
        channelList.value = data.value?.channelList
        playList.value = data.value?.playList
        
    } catch (error) {
        dataError.value = 'Error! Could not reach the API. ' + error
    }
})


</script>

<style scoped>
.bg_image {
    top: 100px;
    width: 30%;
    left: 20px;
    z-index: 0;
}

.loader {
    border: 3px solid #f3f3f312;
    border-radius: 50%;
    border-top: 3px solid red;
    width: 70px;
    height: 70px;
    animation: spin-254a34d2 1s linear infinite;
}

/* Safari */
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

    100% {
        transform: rotate(360deg);
    }
}</style>