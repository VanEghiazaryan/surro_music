import vue3GoogleLogin from 'vue3-google-login'

export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.use(vue3GoogleLogin, {
        clientId: '14073397034-gpnhirupijh40gbipbeba5u2m6dmaqca.apps.googleusercontent.com'
    })
})