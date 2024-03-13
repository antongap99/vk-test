import SelectFilter from "../../../shared/ui/Select/Select.tsx";
import style from './GroupFilter.module.css'
import {useFilters} from "../hooks/useFilters.ts";
import {useMemo} from "react";
import {FriendsStatus, Privacy} from "../model/filters.ts";



function adaptChange<T>(onChange: (value: T) => void) {
    return function(value: unknown) {
        onChange(value as unknown as T); // Приводим тип Privacy к ожидаемому типу T
    };
}


const GroupFilter = () => {
    const { filters, setFilters, allColorOptions} = useFilters();

    const colorOptions = useMemo(() => Array.from(new Set(allColorOptions)).map((color) => {
	    return {
		    value: color,
		    label: color
	    }
    }).concat([{value: "All", label: 'Все'}]), [allColorOptions]);



    const handlePrivacyFilterChange = adaptChange<Privacy>((value: Privacy) => {
        setFilters((filters) => ({ ...filters, privacy: value }));
    });
    const handleAvatarColorFilterChange = (value: string) => {
        setFilters((filters) => ({ ...filters, avatarColor: value }));
    };

    const handleHasFriendsFilterChange = adaptChange<FriendsStatus>((value: FriendsStatus) => {
        setFilters((filters) => ({ ...filters, hasFriends: value }));
    });



    return (
        <div className={style.groupFilterContainer}>
            <SelectFilter
	            selectLabel="Открытые/Закрытые"
			    value={filters.privacy}
			    options={[
				    { value: Privacy.All, label: 'Все' },
				    { value: Privacy.Open, label: 'Открытые' },
				    { value: Privacy.Closed, label: 'Закрытые' }
			    ]}
			    onChange={handlePrivacyFilterChange}
		    />
            <SelectFilter
	            selectLabel='Цвета аватарок'
			    value={filters.avatarColor}
			    options={colorOptions}
			    onChange={handleAvatarColorFilterChange}
            />
            <SelectFilter
                selectLabel='Есть ли друзья'
                value={filters.hasFriends}
                options={[
                    { value: FriendsStatus.All, label: 'Все' },
                    { value: FriendsStatus.Has, label: 'Есть друзья' },
                    { value: FriendsStatus.NoHas, label: 'Нет друзей' }
                ]}
                onChange={handleHasFriendsFilterChange}
            />
        </div>
    );
};

export default GroupFilter;