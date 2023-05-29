import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { path } from 'common/utils'
import { useAppSelector } from 'common/hooks'
import { selectorAuthIsLoggedIn } from 'features/auth/auth.selector'

/**
 * RequireAuth компонент (обёртка), отображающий маршрутизацию в зависимости от параметра авторизации.
 */
export const RequireAuth = () => {
    const isLoggedIn = useAppSelector(selectorAuthIsLoggedIn)
    return !isLoggedIn ? <Navigate to={path.LOGIN} /> : <Outlet />
}
