import React, { FC } from 'react'
import { Root } from 'routes/root'

type PropsType = {}

export const Profile: FC<PropsType> = ({}) => {
    return (
        <div>
            <div>
                <h1>Personal information</h1>
            </div>
            <div>
                <img src='' alt='' />
            </div>
            <div>
                <h3>Ivan</h3>
            </div>
            <div>
                <p>someEmail@email.com</p>
            </div>
            <div>
                <button>Log out</button>
            </div>
        </div>
    )
}
