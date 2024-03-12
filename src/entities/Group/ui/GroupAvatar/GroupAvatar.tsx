import style from './GroupAvatar.module.css'
import cn from "classnames";
import {useMemo} from "react";

interface  GroupAvatarProps {
    className?: string;
	width: number,
	height: number
	color?: string
}

export const GroupAvatar = (props: GroupAvatarProps) =>{
    const {className, width, height, color,} = props;

    const  avatarStyles = useMemo(() => ({
        backgroundColor: color || '#000000',
        width: `${width}px`,
        height: `${height}px`,
    }), [color, width, height]);


    return  (
        <div className={cn(style.GroupAvatar, className)} style={avatarStyles}/>
    )
}
