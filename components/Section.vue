<template>
    <div class="grid col-span-2 h-screen bg-[#171B26]">
        <div class="row-span-1">
            <div class="mt-[24px] ml-[30px] mb-[20px]">
                <img src="../assets/image/front/logo.png" />
            </div>
        </div>
        <div class="row-span-2">
            <NuxtLink to="/">
                <div class="text-lg flex items-center text-white px-[20px] hover:bg-[#0D0F17] cursor-pointer	">
                    <Squares2X2Icon class=" w-[25px] icn_section"></Squares2X2Icon> <span class="p-[10px]">Home</span>
                </div>
            </NuxtLink>
            <NuxtLink to="/search">
                <div class="text-lg flex items-center text-white px-[20px] hover:bg-[#0D0F17] cursor-pointer">
                    <MagnifyingGlassIcon class="icn_section w-[20px]"></MagnifyingGlassIcon> <span
                        class="p-[10px]">Search</span>
                </div>
            </NuxtLink>
            <NuxtLink to="/liked">
                <div class=" text-lg flex items-center text-white px-[20px] hover:bg-[#0D0F17] cursor-pointer">
                    <AcademicCapIcon class="icn_section w-[20px]"></AcademicCapIcon> <span class="p-[10px]">Liked</span>
                </div>
            </NuxtLink>
            <NuxtLink to="/suro">
                <div class=" text-lg flex items-center text-white px-[20px] hover:bg-[#0D0F17] cursor-pointer">
                    <RectangleGroupIcon class="icn_section w-[20px]"></RectangleGroupIcon> <span class="p-[10px]">Suro
                        +</span>
                </div>
            </NuxtLink>
        </div>
    </div>
</template>

<script setup lang="ts">
// import { Squares2X2Icon, MagnifyingGlassIcon, AcademicCapIcon, RectangleGroupIcon, BugAntIcon, TruckIcon } from "@heroicons/vue/24/solid";

</script>

<style scoped>
.router-link-active div {
    background-color: #0D0F17;
    border-left: 2px solid rgb(240, 79, 105);
}

.router-link-active div .icn_section {
    color: rgb(240, 79, 105);
}
</style>