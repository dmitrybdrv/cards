import React, { FC } from 'react'
import { Navigate, Outlet } from 'react-router-dom'

/**
 * Компонент MainHoc (обёртка), отображающий компонент маршрутизации в зависимости от того, авторизован ли пользователь.
 */
export const MainHoc: FC = () => {
    const isUserLogin = false
    return isUserLogin ? <Outlet /> : <Navigate to={'/auth/login'} />
}
