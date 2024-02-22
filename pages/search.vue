<template>
    <div class="p-[20px] relative z-1 bg-[#0D0F17] min-h-screen">
        <div class="h-[50px]"></div>
        <div class="search_inp_div">
            <img class="absolute top-[55%] left-[6%]" src="../assets/image/icon/Search.png" alt="">
            <input v-model="searchName" :onkeyup="debouncedFunction()"
                class="w-[90%] p-[8px] bg-[#2f3544] pl-[45px] rounded-[10px] outline-0 text-white text-[20px] pt-[6px]"
                placeholder="artist, music" type="text">
        </div>
        <div v-if="showLoader" class="flex justify-center mt-[140px]">
            <div v-if="searchName != null && (!playList || !channelList) && dataError === null || dataError == ' '"
                class="loader"></div>
            <div class="text-white text-[25px]">{{ dataError }}</div>
        </div>
        <div v-if="playList != null || channelList != null || searchName == null || searchName === ''"
            class="w-[90%] m-auto pt-[20px]">
            <div v-if="playList != null">
                <div class="flex items-center">
                    <span class="text-white text-[25px] font-semibold">Music</span>
                    <img class="mt-[7px]" src="../assets/image/icon/More.png" alt="">
                </div>
                <div class="mt-[15px]">
                    <div v-for="(list, index) in playList">
                        <div v-if="index <= 10"
                            class="bg-[#171b26] rounded-[16px] h-[64px] flex justify-between items-center mb-[15px] hover:cursor-pointer">
                            <div class="flex h-[100%] items-center">
                                <div>
                                    <img class="w-[64px] h-[64px] rounded-l-[16px]" :src="list.imageUrl" alt="">
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
    </div>
</template>

<script setup lang="ts">

import { ChannelList, Music, SearchModel } from "../core/models/music";
import { debounce } from "../core/models/debounce";
const searchName = ref('')
const channelList = ref<Array<ChannelList>>();
const playList = ref<Array<Music>>();
const showLoader = ref(false)
const dataError = ref();

const debouncedFunction = debounce(getData, 3000);

watch(searchName, (newSearchData) => {
    dataError.value = " "
    if (newSearchData.length < 3 || newSearchData.length != 0 || newSearchData != null || newSearchData != ' ') {
        setTimeout(() => {
            dataError.value = "Data is not found"
            console.log("data error");
        }, 3000);

        showLoader.value = true;
        console.log("loader true");
    }
})

async function getData() {
    showLoader.value = false;
    const { data, pending, error, status, refresh } = await useAsyncData<SearchModel>(
        'mountains',
        () => $fetch(`/api/v1/{en}/Other/GuestSearch?q=${searchName.value}`,
            {
                baseURL: 'https://surromusicapi.innoverse.tech',
                method: 'GET',
            }
        )
    )
    // if (data.value?.channelList != null || data.value?.playList != null) {
    //     dataError.value = " ";
    // } else {
        channelList.value = data.value?.channelList
        playList.value = data.value?.playList
    // } 

}



</script>

<style scoped>
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
}

@media only screen and (min-device-width: 368px) and (max-device-width: 1024px) {
    #section_class {
        z-index: 50;
        width: 100%;
    }
}

.search_inp_div{
    text-align: center;
    position: fixed;
    width: 80%;
    top: 7%;
    background: #0d0f17;
    padding-top: 57px;
    padding-bottom: 20px;
}
</style>