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
    playList?: Array<Music>;
    state: number
    constructor() {
        this.state = 0;
    }
}


export class Music {
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
    state: number
    constructor(){
        this.state = 0;
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
    playList?: Array<Music>;
    suggestLike?: boolean
}

export class PlayList {
    type?: PlayListType;
    id?: number;
    playList?: Array<Music>
}

export class SearchModel {
    channelList?: Array<ChannelList>;
    playList?: Array<Music>;
}
export enum PlayListType{
    customPlayList = "customPlayList",
    thematic = "thematic",
    channel = "channel"
}

export enum ButtonType{
    play = "play",
    loading = "loading",
    pause = "pause"
}