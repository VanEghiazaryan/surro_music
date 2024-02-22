import { defineStore } from 'pinia';
import { PlayListType } from '../models/music';
import { baseURL } from '../utils';

export const usePlayListLike = defineStore('like', {
    state: () => ({
        
    }),

    actions: {   
        async LikeInPlayList(id: number | undefined) { 
            // console.log(id);
            const token = useCookie('accessToken')

            console.log(token.value ??  ' ffffddfvcfd'); 
            const data = await $fetch(`/api/v1/en/Other/PlaylistLike`,
                {
                    baseURL: baseURL,
                    method: 'POST',
                    body: {
                        'playListID': id,
                        'like': true
                    },
                    headers: { 'Access-Token': token.value ?? ' ' }
                }
            );

            console.log(data);
            
        },
    },
});
