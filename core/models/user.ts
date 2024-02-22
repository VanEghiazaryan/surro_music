export class User {
    id?:number
    firstName?:string;
    lastName?: string;
    userName?: null
}

export class UserData {
    accessToken?: string;
    user?: User
}