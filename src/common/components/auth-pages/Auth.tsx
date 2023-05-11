import { path } from 'common/constants'
import { useMainSelectors } from 'common/hooks'
import React, { FC } from 'react'
import { Navigate, Outlet } from 'react-router-dom'

export const Auth: FC = () => {
    const { isLoggedIn } = useMainSelectors()
    return <div>{isLoggedIn ? <Outlet /> : <Navigate to={path.LOGIN} />}</div>
}
