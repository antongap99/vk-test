import cn from "classnames";
import style from './GroupList.module.css'
import {useEffect, useState} from "react";
import {GroupCard} from "../GroupCard/GroupCard.tsx";
import {Group} from "../../entities/Group/Group.ts";
import mockService from "../../shared/MockService/MockService.ts";

interface  GroupListProps {
    className?: string;

}
// TODO вынести groups в context
// TODO Написать ui компонент сайдбар
// TODO Написать компонент toolTip
// TODO Использовать компонент SimpleCell vk-ui
export const GroupList = ({className}: GroupListProps) =>{
	const [groups, setGroups] = useState<Group[]>([]);

	const fetchData = async () => {
		try {
			const res = await mockService.fetchData<Group[]>();
			if(res && res?.length) {
				setGroups(res)
			}
		} catch (e){
			console.log(e)
		}
	}

	useEffect(() => {
		fetchData()
	}, []);
    return  (
        <div className={cn(style.GroupList, className)}>
	        {groups.map(group => <GroupCard key={group.id} data={group} />)}
        </div>
    )
}

