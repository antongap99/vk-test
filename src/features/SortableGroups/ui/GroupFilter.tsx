import SelectFilter from "../../../shared/ui/Select/Select.tsx";
import style from './GroupFilter.module.css'
import {useFilters} from "../hooks/useFilters.ts";
import {useMemo} from "react";
import {Privacy} from "../model/context.tsx";





const GroupFilter = () => {
    const { filters, setFilters, allColorOptions} = useFilters();

    const colorOptions = useMemo(() => Array.from(new Set(allColorOptions)).map((color) => {
	    return {
		    value: color,
		    label: color
	    }
    }).concat([{value: "All", label: 'Все'}]), [allColorOptions]);

    const handlePrivacyFilterChange = (value: string) => {
        setFilters((filters) => ({ ...filters, privacy: value }));
    };

    const handleAvatarColorFilterChange = (value: string) => {
        setFilters((filters) => ({ ...filters, avatarColor: value }));
    };

    const handleHasFriendsFilterChange = (value: boolean) => {
        setFilters((filters) => ({ ...filters, hasFriends: value }));
    };

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
            <label  className={style.hasFriendsFilter}>
                Есть ли друзья:
                <input
			        type="checkbox"
			        checked={filters.hasFriends}
			        onChange={(event) => handleHasFriendsFilterChange(event.target.checked)}
		        />
            </label>
        </div>
    );
};

export default GroupFilter;