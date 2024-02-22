import { defineStore } from 'pinia';
import { googleTokenLogin } from 'vue3-google-login';
import { User, UserData } from '../models/user';
import { baseURL } from '../utils';


export const useAuthStore = defineStore('auth', {
    state: () => ({
        user: ref<User | null>(),
        authenticated: ref<boolean>(false)
    }),

    actions: {
        async authWithGoogle() {
            var token = await googleTokenLogin();
            const data = await $fetch<UserData>(`/api/v1/auth/googlelogin`,
                {
                    baseURL: baseURL,
                    method: 'POST',
                    body: {
                        'accessToken': token.access_token
                    }
                }
            );
            if (data) {
                const token: any = useCookie('accessToken', { default: () => null, });
                token.value = useCookie('accessToken').value = data.accessToken;
                this.user = data.user;
                this.authenticated = true;
            }
        },

        async userData(){
            const token = useCookie('accessToken').value
            if (token) {
                const data = await $fetch<UserData>(`/api/v1/auth/getuser`,
                    {
                        baseURL: 'https://apiv2.surromusic.com',
                        method: 'GET',
                        headers:{
                            'Access-Token': token??"",
                        }
                    }
                );
                if (data) {
                    this.authenticated = true;
                }               
            }
            
        },

        logOute(){
            const token = useCookie('accessToken')
            localStorage.removeItem('token');
            this.user = null;
            this.authenticated = false
            token.value = null; 
        }
    },
});
