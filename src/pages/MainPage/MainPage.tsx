import cn from "classnames";
import style from './MainPage.module.css'
import {ReactNode} from "react";

interface  MainPageProps {
    className?: string;
	children: ReactNode
}

export const MainPage = ({className, children}: MainPageProps) =>{
    return  (
        <div className={cn(style.MainPage, className)}>
	        {children}
        </div>
    )
}

