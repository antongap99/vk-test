import SelectFilter from "../../../shared/ui/Select/Select.tsx";
import style from './GroupFilter.module.css'
import {useFilters} from "../hooks/useFilters.ts";

enum FilterClosedValue {
	All = 'all',
	Public = 'public',
	Private = 'private',
}



const GroupFilter = () => {
    const { filters, setFilters } = useFilters();

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
	            selectLabel="Privacy Filter"
			    value={filters.privacy}
			    options={[
				    { value: FilterClosedValue.All, label: 'All' },
				    { value: FilterClosedValue.Public, label: 'Public' },
				    { value: FilterClosedValue.Private, label: 'Private' }
			    ]}
			    onChange={handlePrivacyFilterChange}
		    />
            <SelectFilter
	            selectLabel='Avatar Color Filter'
			    value={filters.avatarColor}
			    options={[
				    { value: 'any', label: 'Any' },
				    { value: 'red', label: 'Red' },
				    { value: 'blue', label: 'Blue' }
				    // Добавьте другие цвета, если необходимо
			    ]}
			    onChange={handleAvatarColorFilterChange}
            />
            <label  className={style.hasFriendsFilter}>
                Has Friends Filter:
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