import { defineStore } from 'pinia';

export const useMusicData = defineStore('music', {
    state: () => ({
        fetchedData: ref<Array<CustomPlayList>>([]),
        currentList: ref<CustomPlayList>(),
    }),

    actions: {
        async getCustomList(id?:number) {
            let query;
            
            if(id){
                query={"id":id.toString()};
            } 
            
            try { 
                const data = await $fetch<Array<CustomPlayList>>(
                    `/api/v1/{en}/Other/GuestCustomPlayList`,
                    {
                        query: query,
                        baseURL: 'https://surromusicapi.innoverse.tech',
                        method: 'GET',
                    }
                );
                if (!id && data) {
                    this.fetchedData = data;
                    return this.fetchedData;
                }
                if (id && data.length > 0) {
                    this.currentList = data[0]
                    return this.currentList;
                }
                console.log('this fetch data ', this.fetchedData);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        },
    },
});

export class CustomPlayList {
    childList?: Array<CustomPlayList>;
    code?: string;
    errMsg?: null;
    id?: number;
    liked?: boolean;
    nameEn?: string;
    nameHy?: string;
    nameRu?: string;
    parentID?: number;
    playList?: Array<PlayList>;
}


export class PlayList {
    artistNameEn?: string;
    artistNameHy?: string;
    artistNameRu?: string;
    downloaded?: boolean;
    duration?: number;
    errMsg?: null;
    id?: number;
    imageUrl?: string;
    liked?: null;
    nameEn?: string;
    nameHy?: string;
    nameRu?: string;
    rowCount?: null;
    songUrl?: string
    constructor() {
        
    }
}
export class ChannelList {
    errMsg?: null;
    id?: number;
    image?:string;
    liked?: boolean;
    nameEn?: string;
    nameHy?: string;
    nameRu?: string;
    playList?: Array<PlayList>;
    suggestLike?: boolean
}

export class SearchModel {
    channelList?: Array<ChannelList>;
    playList?: Array<PlayList>;
}
export enum CurrentPlayList{
    customPlayList,
    thematic,
    channel
}