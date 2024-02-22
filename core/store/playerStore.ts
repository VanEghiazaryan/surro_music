import { defineStore } from "pinia";
import { Music, PlayList, CustomPlayList, PlayListType, ButtonType } from "../models/music";

export const usePlayList = defineStore('play', {
    state: () => ({
        currentPlayList: ref<PlayList>(),
        currentMusic: ref<Music>(),
        currentIndex: ref<number>()
    }),

    actions: {
        async getCurrentPlayList() {
            let query;
            let currentListStorage = localStorage.getItem('currentPlayList');

            if (currentListStorage) {
                var currentList = JSON.parse(currentListStorage);
            }
            if (currentList.id) {
                query = { "id": (currentList.id).toString() };
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
                                    
                if (data[0].playList) {
                    for (let i = 0; i < data[0].playList.length; i++) {
                        const dataItem = data[0].playList[i];

                        if (dataItem.id === currentList.playList[i].id) {
                          
                            if (i === data[0].playList.length - 1 ) {
                                this.getCurrentMusic() 
                                
                                return
                            }
                            else{
                                continue
                            }
                        }
                        else {
                            this.setCurrentList(data)
                        }
                    }
                }
            } catch (error) {
                console.log('catch');
            }
        },

        nextCurrentMusic() {
            console.log('next 66666666',this.currentIndex );
            console.log(this.currentPlayList?.playList);
            
            if (this.currentPlayList?.playList && this.currentIndex) {
                console.log('mtav');
                
                this.setCurrentMusic(this.currentPlayList?.playList[this.currentIndex + 1], this.currentIndex + 1)
            }
        },

        prevCurrentMusic() {
            console.log('22222222222  ',this.currentIndex);
            
            if (this.currentIndex === 0) {
                return
            }
            if (this.currentPlayList?.playList && this.currentIndex) {
                this.setCurrentMusic(this.currentPlayList?.playList[this.currentIndex - 1], this.currentIndex - 1)
                
            }
        },

        setCurrentList(currentPlayList: any) {
            localStorage.setItem("currentPlayList", JSON.stringify(currentPlayList))
            localStorage.setItem("currentMusic", JSON.stringify(currentPlayList?.playList[0]))
            this.currentPlayList = currentPlayList;
            this.currentMusic = currentPlayList.playList[0];
            this.currentIndex = 0
            // console.log(this.currentIndex);
            // console.log(this.currentMusic);
            // console.log(this.currentPlayList);
        },

        setCurrentMusic(music: Music, currentIndex: number) {
            console.log('set music', music)
            console.log('currentIndex ', currentIndex);
            // if (this.currentPlayList) {
                console.log('curent list music ',this.currentPlayList);
            // }
            
            this.currentMusic = music
            this.currentIndex = currentIndex
            localStorage.setItem("currentMusic", JSON.stringify(music))

        },

        getCurrentMusic() {

            const saveCurrentList = localStorage.getItem('currentPlayList')
            const saveCurrentMusic = localStorage.getItem('currentMusic');
            if (saveCurrentMusic) {
                this.currentMusic = JSON.parse(saveCurrentMusic);
            }
            if (saveCurrentList) {
                this.currentPlayList = JSON.parse(saveCurrentList);
            }
        }
    }
})

