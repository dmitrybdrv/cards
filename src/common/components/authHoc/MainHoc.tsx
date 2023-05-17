import { useHelpingSelectors } from 'common/hooks'
import { path } from 'common/utils'
import React, { FC } from 'react'
import { Navigate, Outlet } from 'react-router-dom'

/**
 * MainHoc компонент (обёртка), отображающий маршрутизацию в зависимости от параметра авторизации.
 */
export const MainHoc: FC = () => {
    const { isLoggedIn } = useHelpingSelectors()
    return isLoggedIn ? <Outlet /> : <Navigate to={path.LOGIN} />
}
