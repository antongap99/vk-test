import React from "react";

export interface Filters {
	privacy: string;
	avatarColor: string;
	hasFriends: boolean;
}

export interface FilterContextType {
	filters: Filters;
	setFilters: React.Dispatch<React.SetStateAction<Filters>>;
	allColorOptions:string[],
	setAllColorOptions: React.Dispatch<React.SetStateAction<string[]>>;
}