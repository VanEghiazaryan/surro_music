<template>
    <div class="grid grid-cols-12 fixed h-screen w-screen">
        <div class="lg:col-span-2  w-full">
            <Section @clickMenuIcn="clickMenuIcn" id="section_class" class="transition-all z-40  vs:fixed lg:static"
                :class="[{ 'left-0': toggleDrawer }, { 'left-[-100%]': !toggleDrawer }]">
            </Section>
        </div>
        <div class="col-span-12 lg:col-span-10 relative">
            <Header class="z-50" @clickMenuIcn="clickMenuIcn"></Header>
            <div class="h-screen overflow-y-auto overflow-x-hidden bg-[#0D0F17] pt-8 pb-24">
                <NuxtPage></NuxtPage>
            </div>
            <Player class="absolute z-40 bottom-[0px]"></Player>
        </div>
    </div>
</template>

<script setup lang="ts">
const toggleDrawer = ref(false);

function clickMenuIcn() {
    toggleDrawer.value = !toggleDrawer.value;
}

</script>

<style scoped></style>