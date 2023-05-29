import { useAppSelector} from 'common/hooks'
import { path } from 'common/utils'
import { selectorAuthIsLoggedIn } from 'features/auth/auth.selector'
import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

/**
 * AuthProvider - компонент (обёртка), отображающий маршрутизацию в зависимости от параметра авторизации.
 */
export const AuthProvider =() => {
    const isLoggedIn = useAppSelector(selectorAuthIsLoggedIn)
    return isLoggedIn ? <Navigate to={path.PACKS} /> : <Outlet />
}