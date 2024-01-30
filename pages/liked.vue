<template>
    <div class="grid grid-cols-12 ">
        <div class="col-span-2">
            <Section></Section>
        </div>

        <div class="col-span-10 bg-[#0D0F17] relative min-h-screen">
            <div class="absolute bg_image">
                <img src="../assets/image/front/nkar.png" alt="">
            </div>
            <Header></Header>
            <div class="p-[20px]">
                <div class="h-[50px]"></div>
                
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">

</script>

<style scoped>
.bg_image {
    top: 100px;
    width: 30%;
    left: 20px;
    z-index: 0;
}
</style>