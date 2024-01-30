<template>
    <div class=" h-screen bg-[#171B26] fixed w-[100%]">
        <div>
            <div class="mt-[24px] ml-[30px] mb-[20px]">
                <NuxtLink to="/" file="">
                    <img src="../assets/image/front/logo.png" />
                </NuxtLink>
            </div>
            <div class="mt-[50px]">
                <NuxtLink to="/" file="">
                    <div class="text-lg flex items-center text-white px-[20px] hover:bg-[#0D0F17] cursor-pointer	">
                        <img class="icn_section" src="../assets/image/icon/Union1.png" /> <span class="p-[10px]">Home</span>
                    </div>
                </NuxtLink>
                <NuxtLink to="/search">
                    <div class="text-lg flex items-center  text-white px-[20px] hover:bg-[#0D0F17] cursor-pointer">
                        <img class="icn_section" src="../assets/image/icon/Search.png" /> <span
                            class="p-[10px]">Search</span>
                    </div>
                </NuxtLink>
                <NuxtLink to="/liked">
                    <div class=" text-lg flex items-center text-white px-[20px] hover:bg-[#0D0F17] cursor-pointer">
                        <img class="icn_section" src="../assets/image/icon/Liked.png" /><span class="p-[10px]">Liked</span>
                    </div>
                </NuxtLink>
                <NuxtLink to="/suro">
                    <div class=" text-lg flex items-center text-white px-[20px] hover:bg-[#0D0F17] cursor-pointer">
                        <img class="icn_section" src="../assets/image/icon/Subtract.png" />
                        <span class="p-[10px]">Suro +</span>
                    </div>
                </NuxtLink>
            </div>
        </div>
        <!-- <div class="banner_div">
            <div>
                <img class="w-[130px] h-[130px] ml-[35px]" src="../assets/image/front/Banner.png" alt="">
            </div>
            <div>
                <p class="text-[#999FB1] ml-[20px] mt-[10px]">Terms of use</p>
                <p class="text-[#999FB1] ml-[20px] mt-[10px]">Privacy Policy</p>
                <p class="text-[#999FB1] w-[224px] border-t p-[10px]">© 2022 Surro. All rights reserved.</p>
            </div>
        </div> -->
    </div>
</template>

<script setup lang="ts">

</script>

<style scoped>
.router-link-active div {
    background-color: #0D0F17;
    border-left: 2px solid rgb(240, 79, 105);
}

.router-link-active div .icn_section {
    color: rgb(240, 79, 105);
    filter: brightness(0) saturate(100%) invert(38%) sepia(99%) saturate(1753%) hue-rotate(324deg) brightness(101%) contrast(88%);
}

.banner_div {
    position: absolute;
    bottom: 15px;
}
</style>