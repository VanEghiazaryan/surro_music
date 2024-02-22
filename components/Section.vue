<template>
    <div class="w-[100%] h-screen vs:bg-[#00000066] ">
        <div class="lg:w-full md:bg-[#171B26] w-[100%]  bg-[#171B26] h-screen vs:w-[50%] md:w-[30%]">
            <div class="pt-[24px] ml-[30px] mb-[20px]">
                <div class="flex justify-between">
                    <NuxtLink to="/" file="" @click="$emit('clickMenuIcn')">
                        <img src="../assets/image/front/logo.png" />
                    </NuxtLink>
                    <button @click="$emit('clickMenuIcn')"
                        class="lg:invisible text-white text-[18px] mr-[10px] visible">x</button>
                </div>
            </div>
            <div class="mt-[50px]">
                <NuxtLink to="/" file="" @click="$emit('clickMenuIcn')">
                    <div class="text-lg flex items-center text-white px-[20px] hover:bg-[#0D0F17] cursor-pointer	">
                        <img class="icn_section" src="../assets/image/icon/Union1.png" /> <span class="p-[10px]">Home</span>
                    </div>
                </NuxtLink>
                <NuxtLink to="/search" @click="$emit('clickMenuIcn')">
                    <div class="text-lg flex items-center  text-white px-[20px] hover:bg-[#0D0F17] cursor-pointer">
                        <img class="icn_section" src="../assets/image/icon/Search.png" /> <span
                            class="p-[10px]">Search</span>
                    </div>
                </NuxtLink>
                <NuxtLink to="/liked" @click="$emit('clickMenuIcn')">
                    <div class=" text-lg flex items-center text-white px-[20px] hover:bg-[#0D0F17] cursor-pointer">
                        <img class="icn_section" src="../assets/image/icon/Liked.png" /><span class="p-[10px]">Liked</span>
                    </div>
                </NuxtLink>
                <NuxtLink to="/suro" @click="$emit('clickMenuIcn')">
                    <div class=" text-lg flex items-center text-white px-[20px] hover:bg-[#0D0F17] cursor-pointer">
                        <img class="icn_section" src="../assets/image/icon/Subtract.png" />
                        <span class="p-[10px]">Suro +</span>
                    </div>
                </NuxtLink>
            </div>
        </div>
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