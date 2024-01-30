<template>
    <div class="header_section">
        <div class="mr-[15px]">
            <img class="hover: cursor-pointer text-white" src="../assets/image/icon/Notification.png" alt="">
        </div>
        <div class="mr-[15px]">
            <img class="hover: cursor-pointer text-white" src="../assets/image/icon/Settings.svg" alt="">
        </div>
        <div class="mr-[15px] text-[white]">
            <button @click="show = !show" class="">Login / Register</button>
        </div>
    </div>

    <div v-if="show" class="loginModal fixed z-50 bg-[#0000005e] w-[100%] h-screen left-0 flex justify-center items-center">
        <div class="w-[35%] bg-[#171B26] h-[90%]">
            <div class="relative">
                <img class="absolute top-36 rotate-180" src="../assets/image/front/nkar.png" alt="">
                <img class="absolute top-32 left-10" src="../assets/image/front/nkar.png" alt="">
            </div>
            <div class="text-[#7A8192] text-end text-[25px] mr-[20px]">
                <button @click="show = !show">x</button>
            </div>
            <div class="relative bg-[#171b2659]">
                <div class="text-center">
                    <div class="flex justify-center mt-[40px] mb-[10px]">
                        <img src="../assets/image/front/Logo.png" alt="">
                    </div>
                    <div class="flex justify-center">
                        <img src="../assets/image/front/Surro.png" alt="">
                    </div>
                    <div class="mt-[30px]">
                        <p class="text-white text-[25px]">You are welcome</p>
                        <span class="text-[#7A8192]">Log in with your preferred option</span>
                    </div>
                </div>
                <div class="mt-[15%]">
                    <div class="login_icon">
                        <img class="ml-[15px] w-[24px] h-[24px]" src="../assets/image/icon/fb.png" alt="">
                        <button class="w-[100%]">Facebook</button>
                    </div>
                    <div class="login_icon">
                        <img class="ml-[15px] w-[24px] h-[24px]" src="../assets/image/icon/g+.png" alt="">
                        <button class="w-[100%]">Google</button>
                    </div>
                    <div class="login_icon">
                        <img class="ml-[15px] w-[24px] h-[24px]" src="../assets/image/icon/apple.png" alt="">
                        <button class="w-[100%]">Apple</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
const show = ref(false)
function showLoginModal() {
    show.value = true
}
</script>

<style scoped>
.loginModal {
    transition: width 2s;
}

.header_section {
    display: flex;
    background: #0d0f17;
    padding: 15px;
    position: fixed;
    width: -webkit-fill-available;
    justify-content: flex-end;
    z-index: 10;
    border-bottom: 1px solid #050508;
}

.login_icon {
    border: 1px solid #2A3042;
    border-radius: 25px;
    width: 70%;
    margin: auto;
    display: flex;
    padding: 11px;
    color: white;
    margin-top: 20px;
}

.login_icon:hover {
    cursor: pointer;
    border: 1px solid rgba(255, 255, 255, 0.45);
}
</style>