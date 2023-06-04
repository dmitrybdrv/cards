import { useAppSelector } from 'common/hooks'
import { path } from 'common/utils'
import { selectorAuthIsLoggedIn } from 'features/auth/auth.selector'
import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

/**
 * RequireAuth компонент (обёртка), отображающий маршрутизацию в зависимости от параметра авторизации.
 */
export const RequireAuth = () => {
    const isLoggedIn = useAppSelector(selectorAuthIsLoggedIn)

    if (!isLoggedIn) {
        return <Navigate to={path.LOGIN}/>
    }
    return <Outlet />
}
