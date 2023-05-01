import React, { FC } from 'react'
import { Root } from 'routes/root'

type PropsType = {}

export const CheckEmail: FC<PropsType> = ({}) => {
    return (
        <div>
            <h1>Check Email</h1>
            <div>
                <p>We`ve sent an email with instruction to example@mail.com</p>
            </div>
            <div>
                <button>Back to login</button>
            </div>
        </div>
    )
}
