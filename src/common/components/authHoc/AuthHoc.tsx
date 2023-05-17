import { useHelpingSelectors } from 'common/hooks'
import { path } from 'common/utils'
import React, { FC } from 'react'
import { Navigate, Outlet } from 'react-router-dom'

/**
 * AuthHoc - компонент (обёртка), отображающий маршрутизацию в зависимости от параметра авторизации.
 */
export const AuthHoc: FC = () => {
    const { isLoggedIn } = useHelpingSelectors()
    return isLoggedIn ? <Navigate to={path.PACKS} /> : <Outlet />
}
