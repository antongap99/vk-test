import cn from "classnames";
import style from './GroupCard.module.css'
import {Group} from "../../Entity/Group/Group.ts";

interface  GroupProps {
    className?: string;
	data: Group
}

export const GroupCard = ({className, data}: GroupProps) =>{
    return  (
        <div className={cn(style.GroupCard, className)}>
	        <h2 className={style.GroupCardTitle}>{data.name}</h2>
	        <p className={style.GroupCardStatus}>{data.closed}</p>
        </div>
    )
}

