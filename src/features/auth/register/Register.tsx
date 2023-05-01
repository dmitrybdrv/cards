import React, { FC } from 'react'
import { Root } from 'routes/root'

type PropsType = {}

export const Register: FC<PropsType> = ({}) => {
    return (
        <div>
            <h2>Registration</h2>
            <div>
                <input type='email' placeholder={'email'} />
            </div>
            <div>
                <input type='password' placeholder={'password'} />
            </div>
            <div>
                <input type='password' placeholder={'confirm password'} />
            </div>
            <div>
                <button>Register</button>
            </div>
        </div>
    )
}
