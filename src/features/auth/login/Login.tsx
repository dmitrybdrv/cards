import React, { FC } from 'react'

type PropsType = {}

export const Login: FC<PropsType> = ({}) => {
    return (
        <div>
            <h2>Login</h2>
            <ul>
                <li>Email</li>
                <li>Passowrd</li>
                <li>
                    <input type='checkbox' />
                    Remember me
                </li>
            </ul>
            <a href='#'>Forgot password?</a>
            <div>
                <button>Login</button>
            </div>
            <div>
                <p>don`t have an account?</p>
                <div>
                    <a href='#'>Register</a>
                </div>
            </div>
        </div>
    )
}
