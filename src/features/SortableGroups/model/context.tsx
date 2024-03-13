import React, {createContext, ReactNode, useState} from 'react';
import {FilterContextType, Filters} from "./types.ts";


export enum Privacy {
	Open= 'Open',
	Closed= 'Closed',
	All = 'All'
}


const defaultFilters: Filters = {
    privacy: Privacy.All,
    avatarColor: 'All',
    hasFriends: false
};

export const FilterContext = createContext<FilterContextType>({
    filters: defaultFilters,
    setFilters: () => {},
    allColorOptions: [],
    setAllColorOptions: () => {}
});

interface FilterProviderProps {
	children: ReactNode
}

export const FilterProvider: React.FC<FilterProviderProps> = ({ children }) => {
    const [filters, setFilters] = useState<Filters>(defaultFilters);
    const [allColorOptions, setAllColorOptions] = useState<string[]>([])

    return (
        <FilterContext.Provider value={{ filters, setFilters, allColorOptions, setAllColorOptions}}>
            {children}
        </FilterContext.Provider>
    );
};
