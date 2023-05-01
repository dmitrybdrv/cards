import React, { FC } from 'react'
import { Root } from 'routes/root'

type PropsType = {}

export const SetNewPassword: FC<PropsType> = ({}) => {
    return (
        <div>
            <h1>Create new password</h1>
            <div>
                <input type='text' placeholder={'Password'} />
            </div>
            <div>
                <p>Create new password and we will send you further instruction to email</p>
            </div>
            <div>
                <button>Create new password</button>
            </div>
        </div>
    )
}
