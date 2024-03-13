import {Filters} from "./types.ts";

export enum Privacy {
    Open= 'Open',
    Closed= 'Closed',
    All = 'All'
}

export enum FriendsStatus {
    All = 'All',
    Has = 'Has',
    NoHas = 'NoHas'
}


export const defaultFilters: Filters = {
    privacy: Privacy.All,
    avatarColor: 'All',
    hasFriends: FriendsStatus.All
};