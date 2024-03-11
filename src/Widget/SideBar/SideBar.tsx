import cn from "classnames";
import style from './SideBar.module.css'

interface  SideBarProps {
    className?: string;

}

export const SideBar = ({className}: SideBarProps) =>{
    return  (
        <div className={cn(style.SideBar, className)}>
        </div>
    )
}

