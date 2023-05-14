import { SignIn } from 'features/auth/sign-in/SignIn'
import React, { FC } from 'react'
import { Navigate, Outlet } from 'react-router-dom'

type PropsType = {}

export const AuthHoc: FC<PropsType> = ({}) => {
    const isUserAuth = true
    return isUserAuth ? <Navigate to={'/packs'} /> : <Outlet />
}
