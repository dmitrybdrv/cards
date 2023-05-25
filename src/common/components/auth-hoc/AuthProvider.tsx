import { SignIn } from 'features/auth'
import React, { FC } from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { useHelpingSelectors } from 'common/hooks'
import { path } from 'common/utils'

/**
 * AuthProvider - компонент (обёртка), отображающий маршрутизацию в зависимости от параметра авторизации.
 */
export const AuthProvider: FC = () => {
    const { isLoggedIn } = useHelpingSelectors()
    return isLoggedIn ? <Navigate to={path.PACKS} /> : <Outlet />
}