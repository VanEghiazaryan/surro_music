<template>
    <div class="header_section">
        <div class="mr-[15px]">
            <img class="hover: cursor-pointer text-white" src="../assets/image/icon/Notification.png" alt="">
        </div>
        <div class="mr-[15px]">
            <img class="hover: cursor-pointer text-white" src="../assets/image/icon/Settings.svg" alt="">
        </div>
        <div class="mr-[15px] text-[white]">
            <span class="hover: cursor-pointer">Login / Register</span>
        </div>
    </div>
</template>

<script setup lang="ts">

</script>

<style scoped>
.header_section {
    display: flex;
    background: #171b26;
    padding: 15px;
    position: fixed;
    width: -webkit-fill-available;
    justify-content: flex-end;
    z-index: 10;
}
</style>