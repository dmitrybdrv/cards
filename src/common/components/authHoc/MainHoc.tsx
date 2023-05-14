import React, { FC } from 'react'
import { Navigate, Outlet } from 'react-router-dom'

type PropsType = {}

export const MainHoc: FC<PropsType> = ({}) => {
    const isUserLogin = true
    return isUserLogin ? <Outlet /> : <Navigate to={'/auth/login'} />
}
