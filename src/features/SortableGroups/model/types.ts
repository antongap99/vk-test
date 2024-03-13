import React from "react";
import {FriendsStatus, Privacy} from "./filters.ts";

export interface Filters {
	privacy: Privacy;
	avatarColor: string;
	hasFriends: FriendsStatus;
}

export interface FilterContextType {
	filters: Filters;
	setFilters: React.Dispatch<React.SetStateAction<Filters>>;
	allColorOptions:string[],
	setAllColorOptions: React.Dispatch<React.SetStateAction<string[]>>;
}