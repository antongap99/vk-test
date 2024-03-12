import cn from "classnames";
import style from './GroupCard.module.css'
import {Group} from "../../model/Group.ts";
import {SimpleCell} from "@vkontakte/vkui";
import {GroupAvatar} from "../GroupAvatar/GroupAvatar.tsx";
import {useState} from "react";

interface  GroupProps {
    className?: string;
	data: Group
}

export const GroupCard = ({className, data}: GroupProps) =>{

    const [showFriends, setShowFriends] = useState(false)

    const toggleFriendsHandler = () => {
	    setShowFriends(!showFriends)
    }

    return  (
        <div className={style.GroupCardWrapper}>
            <SimpleCell
		        expandable="auto"
		        before={<GroupAvatar className='flex-child-start' color={data.avatar_color} height={100} width={100}/>}
	        >
                <div className={cn(style.GroupCard, className)}>
                    <div className={style.titleWrapper}>
                        <h2 className={style.GroupCardTitle}>Группа {data.name}</h2>
                        <p className={
			                cn(style.GroupCardStatus, {[style.closed]: data.closed, [style.open]: !data.closed})
		                }>{data.closed ? 'Открыта': 'Закрыта'}</p>
                    </div>
                    {data.members_count > 0 && <p className={style.GroupCardMemberCount}>
                        <span>Число подписчиков: </span>
                        <span>
                            {data.members_count}
                        </span>
                    </p>}
                    {data.friends &&
                        <div className={style.GroupFriends}>
                            <p className={style.GroupCardFriendsCount} onClick={toggleFriendsHandler}>
                                <span>Число Друзей: </span>
                                <span>
                                    {data.friends.length}
                                </span>
                            </p>
                            <ul className={cn(style.FriendList, {[style.FriendList_show]: showFriends})}>
                                {data.friends.map((friend, index) => <li key={index}>{`${friend.first_name} ${friend.first_name}`}</li>)}
                            </ul>
                        </div>
                    }
                </div>
            </SimpleCell>
        </div>
    )
}

