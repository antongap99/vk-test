import {useState, useEffect} from 'react';
import mockService from '../../../shared/MockService/MockService'; // Путь к вашему сервису
import { Group } from '../../../entities/Group/model/Group.ts';
import {useFilters} from "../../../features/SortableGroups/hooks/useFilters.ts";
import {Filters} from "../../../features/SortableGroups/model/types.ts";
import {FriendsStatus, Privacy} from "../../../features/SortableGroups/model/filters.ts";

const useGroupList = () => {
    const {filters, setAllColorOptions} = useFilters();
    const [defaultGroups, setDefaultGroups] = useState<Group[]>([]);
    const [groups, setGroups] = useState<Group[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [isError, setIsError] = useState(false)

    useEffect(() => {
        const fetchData = async () => {
            try {
	            setIsLoading(true)
                const res = await mockService.fetchData<Group>();
                if (res.data && res.data.length && res.result) {
                    const data = res.data;
                    const colors  = data.filter(data => data.avatar_color !== undefined).map(data => data.avatar_color) as string[]
                    setGroups(data);
	                setAllColorOptions(colors)
	                setDefaultGroups(data)
	                setIsError(false)
	                setIsLoading(false)
                } else {
                    throw new Error('Вернулись не валидные данные')
                }

            } catch (e) {
                console.log(e);
	            setIsError(true)
	            setIsLoading(false)
            }
        };

        fetchData();
    }, []);

    useEffect(() => {
        const filteredGroups = filterGroups(defaultGroups, filters);
        setGroups(filteredGroups);
    }, [defaultGroups, filters]); // Обновляем список групп при изменении фильтров или списка групп

    // Функция для фильтрации групп на основе заданных фильтров
    const filterGroups = (groups: Group[], filters: Filters) => {
        return groups.filter(group => {
            if (filters.privacy !== 'All') {
                return filters.privacy === Privacy.Closed ? group.closed : !group.closed;
            }
            return true;
        }
        ).filter(group => {
            return !(filters.avatarColor !== 'All' && group.avatar_color !== filters.avatarColor);

        }).filter(group => {
            if (filters.hasFriends !== 'All') {
                return filters.hasFriends === FriendsStatus.Has
                    ? group.friends && group.friends.length
                    : (!group.friends || (group.friends && !group.friends.length));
            }
            return true
        })
    };

    return { groups, isLoading, isError };
};

export default useGroupList;