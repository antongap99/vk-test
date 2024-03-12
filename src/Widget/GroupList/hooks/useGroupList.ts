import { useState, useEffect } from 'react';
import mockService from '../../../shared/MockService/MockService'; // Путь к вашему сервису
import { Group } from '../../../entities/Group/model/Group.ts';
import {useFilters} from "../../../features/SortableGroups/hooks/useFilters.ts";
import {Filters} from "../../../features/SortableGroups/model/types.ts"; // Путь к модели группы

const useGroupList = () => {
    const {filters} = useFilters()
    const [defualtGroups, setDefualtGroups] = useState<Group[]>([])
    const [groups, setGroups] = useState<Group[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await mockService.fetchData<Group[]>();
                if (res && res.length) {
                    setGroups(res);
	                setDefualtGroups(res)
                }
            } catch (e) {
                console.log(e);
            }
        };

        fetchData();
    }, []);

    useEffect(() => {
	    console.log('useEffect1')
        const filteredGroups = filterGroups(defualtGroups, filters);
        setGroups(filteredGroups);
    }, [defualtGroups, filters]); // Обновляем список групп при изменении фильтров или списка групп

    // Функция для фильтрации групп на основе заданных фильтров
    const filterGroups = (groups: Group[], filters: Filters) => {
        return groups.filter(group => {
            if (filters.privacy === '' && group) {
                return false;
            }

            if (filters.avatarColor !== 'any' && group.avatar_color !== filters.avatarColor) {
                return false;
            }

            return !(filters.hasFriends && (!group.friends || (group.friends && group.friends.length === 0)));
        });
    };

    return { groups };
};

export default useGroupList;