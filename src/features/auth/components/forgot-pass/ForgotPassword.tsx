import React, { FC } from 'react'

type PropsType = {}

export const ForgotPassword: FC<PropsType> = ({}) => {
    return (
        <div>
            <h1>Forgot your password?</h1>
            <div>
                <input type='text' placeholder={'Email'} />
                <div>
                    <p>Enter your email and we will send you further instruction</p>
                </div>
            </div>
            <div>
                <button>Send instruction</button>
            </div>
            <div>
                <p>Did you remember your password?</p>
            </div>
            <div>
                <a href='#'>Try logging in</a>
            </div>
        </div>
    )
}
