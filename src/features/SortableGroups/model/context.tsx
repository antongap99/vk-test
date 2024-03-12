import React, {createContext, ReactNode, useState} from 'react';
import {FilterContextType, Filters} from "./types.ts";



const defaultFilters: Filters = {
    closed: false,
    avatarColor: 'any',
    hasFriends: false
};

export const FilterContext = createContext<FilterContextType>({
    filters: defaultFilters,
    setFilters: () => {}
});

interface FilterProviderProps {
	children: ReactNode
}

export const FilterProvider: React.FC<FilterProviderProps> = ({ children }) => {
    const [filters, setFilters] = useState<Filters>(defaultFilters);

    return (
        <FilterContext.Provider value={{ filters, setFilters }}>
            {children}
        </FilterContext.Provider>
    );
};
