import React, { FC } from 'react'
import { Navigate, Outlet } from 'react-router-dom'

/**
 * Компонент AuthHoc (обёртка), отображающий компонент маршрутизации в зависимости от того, авторизован ли пользователь.
 */
export const AuthHoc: FC = () => {
    const isUserAuth = false
    return isUserAuth ? <Navigate to={'/packs'} /> : <Outlet />
}
