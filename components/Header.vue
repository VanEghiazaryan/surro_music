<template>
    <div class="sm:flex items-center sm:mt-[26px]">
        <div
            class=" lg:invisible md:visible fixed z-40 flex vs:flex vs:justify-between sm:justify-normal vs:w-[100%] sm:w-auto vs:bg-[#0d0f17] sm:bg-auto vs:p-[5px]">
            <img @click="$emit('clickMenuIcn')" class="ml-[20px]" src="../assets/image/icon/Menu.png" alt="">
            <img class="sm:ml-[50px] vs:ml-0" src="../assets/image/front/Logo.png" alt="">
            <img @click="openLoginModal()" class="vs:visible sm:invisible vs:mr-[10px]"
                src="../assets/image/icon/Point3.png" alt="">
        </div>
        <div class="header_section vs:invisible sm:visible">
            <div v-if="auth.authenticated == false" class="mr-[30px]">
                <select name="" id="" class="bg-[#0d0f17] text-white outline-none">
                    <option value="">English</option>
                    <option value="">Հայերեն</option>
                    <option value="">Русский</option>
                </select>
            </div>
            <div class="mr-[15px] text-[white]">
                <button v-if="auth.authenticated == false" @click="show = !show">Login / Register</button>
                <button v-else @click="logoutWindow = !logoutWindow"
                    class="w-[40px] h-[40px] rounded-[50%] border-[1px]"><img src="../assets/image/front/Logo.png"
                        alt=""></button>
            </div>
        </div>
    </div>
    <div>
        <div @click="logoutWindow = !logoutWindow" v-if="logoutWindow == true"
            class="w-[100%] top-0 h-screen bg-[#00000069] absolute z-[111] ">
        </div>
        <div class=" w-[30%] transition-all h-screen absolute text-center top-[0] pt-[20px] bg-[#171b26] right-0 z-[555] px-5 "  :class="[{ 'right-0': logoutWindow }, { 'right-[-100%]': !logoutWindow }]">
            <div class="flex text-white items-center  justify-between">
                <div class="flex justify-start items-center">
                    <button class="w-[35px] h-[35px] rounded-[50%] border-[1px] mr-[15px]"><img
                            src="../assets/image/front/Logo.png" alt=""></button>
                    <span>
                        {{ auth.user?.firstName + ' ' + auth.user?.lastName }}
                        <p class="text-start text-[#7A8192]">id: {{ auth.user?.id }}</p>
                    </span>
                </div>
                <button @click="logoutWindow = !logoutWindow, auth.logOute()" class="text-[#7A8192]">Log out</button>
            </div>
            <div class="mt-[30px]">
                <p class="border-b-[1px] border-solid text-start text-white border-[#7A8192] pb-3 mt-2 w-[90%] m-auto justify-between flex">English <img class="w-[20px] h-[20px]" src="../assets/image/icon/check.svg" alt=""></p>
                <p class="border-b-[1px] border-solid text-start text-[#7A8192] border-[#7A8192] pb-3 mt-2 w-[90%] m-auto">Հայերեն</p>
                <p class="border-b-[1px] border-solid text-start text-[#7A8192] border-[#7A8192] pb-3 mt-2 w-[90%] m-auto">Русский</p>
            </div>
        </div>
    </div>
    <div v-if="show"
        class="transition-all duration-300 ease-out loginModal fixed z-50 bg-[#0000005e] w-[100%] h-screen left-0 flex justify-center items-center top-0">
        <div class="lg:w-[35%] bg-[#171B26] lg:h-[90%] w-[100%] h-[100%]">
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
                        <img class="absolute ml-[15px] w-[24px] h-[24px]" src="../assets/image/icon/fb.png" alt="">
                        <button class="w-[100%]">Facebook</button>
                    </div>
                    <div class="login_icon" @click="show = !show, auth.authWithGoogle()">
                        <img class="absolute ml-[15px] w-[24px] h-[24px]" src="../assets/image/icon/g+.png" alt="">
                        <button class="w-[100%]">Google</button>
                    </div>
                    <div class="login_icon">
                        <img class="absolute ml-[15px] w-[24px] h-[24px]" src="../assets/image/icon/apple.png" alt="">
                        <button class="w-[100%]">Apple</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div v-if="openSettingsModal" :class="[{ 'scale-100': isOpen === true }, { 'scale-0': isOpen === false }]"
        class="login_modal_mobail transition-all">
        <div>
            <div class="flex  p-[13px] justify-evenly border-b border-b-black">
                <div class="p-[8px] bg-[#2A3042] rounded-[50%] hover:cursor-pointer">
                    <img src="../assets/image/icon/Notification.png" alt="">
                </div>
                <div class="p-[8px] bg-[#2A3042] rounded-[50%] hover:cursor-pointer">
                    <img src="../assets/image/icon/Settings.png" alt="">
                </div>
            </div>
            <div class="text-center text-white mt-[15px]">
                <button v-if="auth.authenticated == false" @click="show = !show, openLoginModal()">Login/Register</button>
                <button v-else>{{ auth.user?.firstName }}</button>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useAuthStore } from "../core/store/authStore";
const auth = useAuthStore();
defineEmits(['clickMenuIcn'])
const openSettingsModal = ref(false);
const show = ref(false)
const isOpen = ref(false)
const logoutWindow = ref(false)

onMounted(() => {
    setTimeout(() => {
        isOpen.value = true;

    }, 1000);
})

function openLoginModal() {
    if (openSettingsModal.value == false) {
        openSettingsModal.value = true;
    } else {
        openSettingsModal.value = false
    }
}
</script>

<style scoped>
.header_section {
    display: flex;
    background: #0d0f17;
    padding: 15px;
    position: fixed;
    width: -webkit-fill-available;
    justify-content: flex-end;
    z-index: 40;
    border-bottom: 1px solid #050508;
}

.login_icon {
    position: relative;
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

.login_modal_mobail {
    border-radius: 16px;
    position: fixed;
    z-index: 150;
    top: 7%;
    right: 18px;
    width: 54%;
    background: #171B26;
    height: 120px;
}
</style>../core/store/authStore