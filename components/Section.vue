<template>
    <div class="col-span-2 h-screen bg-[#171B26]">
            <div class="mt-[24px] ml-[30px] mb-[20px]">
                <img src="../assets/image/front/logo.png" />
            </div>
        <div class="mt-[50px]">
            <NuxtLink to="/">
                <div class="text-lg flex items-center text-white px-[20px] hover:bg-[#0D0F17] cursor-pointer	">
                   <img  class="icn_section" src="../assets/image/icon/Union.png" /> <span class="p-[10px]">Home</span>
                </div>
            </NuxtLink>
            <NuxtLink to="/search">
                <div class="text-lg flex items-center text-white px-[20px] hover:bg-[#0D0F17] cursor-pointer">
                    <img  class="icn_section" src="../assets/image/icon/Search.png" /> <span
                        class="p-[10px]">Search</span>
                </div> 
            </NuxtLink>
            <NuxtLink to="/liked">
                <div class=" text-lg flex items-center text-white px-[20px] hover:bg-[#0D0F17] cursor-pointer">
                    <img  class="icn_section" src="../assets/image/icon/Liked.png" /><span class="p-[10px]">Liked</span>
                </div>
            </NuxtLink>
            <NuxtLink to="/suro">
                <div class=" text-lg flex items-center text-white px-[20px] hover:bg-[#0D0F17] cursor-pointer">
                    <img  class="icn_section" src="../assets/image/icon/Subtract.png" />
                    <span class="p-[10px]">Suro +</span>
                </div>
            </NuxtLink>
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
}
</style>