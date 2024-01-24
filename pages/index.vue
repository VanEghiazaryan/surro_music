<template>
    <div class="grid grid-cols-12 ">
        <Section></Section>
        <div class="col-span-10 bg-[#0D0F17] relative">
            <div class="absolute bg_image">
                <img src="../assets/image/front/nkar.png" alt="">
            </div>
            <Header></Header>
            <div class="h-[80px]"></div>
            <JustForYou class="relative"/>
        </div>
    </div>
</template>

<script setup lang="ts">
definePageMeta({
    layout:'default'
})

</script>

<style scoped>
.bg_image{
    top: 100px;
    width: 30%;
    left: 20px;
    z-index: 0;
}
</style>