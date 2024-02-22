import { defineStore } from 'pinia';
import type { CustomPlayList } from '../models/music';

export const useMusicData = defineStore('music', {
    state: () => ({
        fetchedData: ref<Array<CustomPlayList>>([]),
        currentList: ref<CustomPlayList>(),
    }),

    actions: {
        async getCustomList(id?: number): Promise<Array<CustomPlayList>> {
            let query;

            if (id) {
                query = { "id": id.toString() };
            }

            try {
                const data = await $fetch<Array<CustomPlayList>>(
                    `/api/v1/{en}/Other/GuestCustomPlayList`,
                    {
                        query: query,
                        baseURL: 'https://apiv2.surromusic.com',
                        method: 'GET',
                    }
                );

                if (!id && data) {
                    this.fetchedData = data;
                    return data;
                }
                if (id && data.length > 0) {
                    this.currentList = data[0]
                    return data;
                }
                else {
                    return [];
                }

            } catch (error) {
                console.error('Error fetching data:', error);
                return [];
            }
        },
    },
});
