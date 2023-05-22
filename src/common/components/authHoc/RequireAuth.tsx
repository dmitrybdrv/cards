import { Layout } from 'common/components/layout/Layout'
import { useHelpingSelectors } from 'common/hooks'
import { path } from 'common/utils'
import React, { FC } from 'react'
import { Navigate, Outlet } from 'react-router-dom'

/**
 * RequireAuth компонент (обёртка), отображающий маршрутизацию в зависимости от параметра авторизации.
 */
export const RequireAuth: FC = () => {
    const { isLoggedIn } = useHelpingSelectors()
    return !isLoggedIn ? <Navigate to={path.LOGIN} /> : <Layout><Outlet /></Layout>
}
