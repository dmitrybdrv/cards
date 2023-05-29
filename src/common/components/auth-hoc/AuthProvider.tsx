import { useAppSelector } from 'common/hooks'
import { path } from 'common/utils'
import { selectorAuthIsLoggedIn } from 'features/auth/auth.selector'
import React from 'react'
import { Navigate, Outlet, useLocation } from 'react-router-dom'

/**
 * AuthProvider - компонент (обёртка), отображающий маршрутизацию в зависимости от параметра авторизации.
 */
export const AuthProvider =() => {
    const isLoggedIn = useAppSelector(selectorAuthIsLoggedIn);
    const location = useLocation();

    return isLoggedIn && location.pathname === path.LOGIN ? (
        <Navigate to={path.PACKS} replace={true} />
    ) : (
        <Outlet />
    );
}