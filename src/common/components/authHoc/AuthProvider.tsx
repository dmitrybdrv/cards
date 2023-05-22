import React, { FC } from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { path } from 'common/utils'
import { useHelpingSelectors } from 'common/hooks'
import { Layout } from 'common/components/layout/Layout'

/**
 * AuthProvider - компонент (обёртка), отображающий маршрутизацию в зависимости от параметра авторизации.
 */
export const AuthProvider: FC = () => {
    const { isLoggedIn } = useHelpingSelectors()
    return isLoggedIn ? <Navigate to={path.PACKS} /> : <Layout><Outlet /></Layout>
}