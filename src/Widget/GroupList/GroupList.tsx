import cn from "classnames";
import style from './GroupList.module.css'
import {GroupCard} from "../../entities/Group";
import useGroupList from "./hooks/useGroupList.ts";

interface  GroupListProps {
    className?: string;
}

export const GroupList = ({className}: GroupListProps) =>{
    const { groups } = useGroupList()

    return  (
        <div className={cn(style.GroupList, className)}>
            {groups.map(group => <GroupCard key={group.id} data={group} />)}
        </div>
    )
}

