import React, { FC } from 'react'

type PropsType = {}

export const Profile: FC<PropsType> = ({}) => {
    /*
     * запрос за данными пользователя useEffect. т.к если мы тут значит логинизация пройдена
     * */

    return (
        <div>
            <div>
                <h1>Profile page</h1>
            </div>
            <div>
                <h3></h3>
            </div>
            <div>
                <h3></h3>
            </div>
        </div>
    )
}
